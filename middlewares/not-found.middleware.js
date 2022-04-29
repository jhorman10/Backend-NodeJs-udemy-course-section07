module.exports = function (req, res, next) {
  res.status(404).send({ message: 'Page not found' });
};
