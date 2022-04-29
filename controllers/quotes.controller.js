const path = require('path');
const DB_PATH = path.join(__dirname + '/../data/db.json');
let db = require(DB_PATH);
const fs = require('fs');

function render(file, res) {
  return res.sendFile(path.join(__dirname + `/../views/${file}.html`));
}

class QuotesController {
  async index(req, res) {
    return render('quotes', res);
  }

  async getQuotes(req, res) {
    return res.send(db);
  }

  async addQuote(req, res) {
    const { body: quote } = req;
    const lasQuote = db[db.length - 1];
    const { id } = lasQuote;
    quote.id = id + 1;
    db.push(quote);
    fs.writeFileSync(DB_PATH, JSON.stringify(db));
    return res.status(201).send(quote);
  }
}

module.exports = new QuotesController();
