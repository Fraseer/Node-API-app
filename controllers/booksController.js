const models = require("../models");

const booksController = {
  async index(request, response, next) {
    const {id} = request.params;
    const bookIndex = await models.Book.findByPk(id, {
        include: [{ model: models.Author, as: "author" }],
    });
    response.send({ books: bookIndex });
  },
};

module.exports = booksController;
