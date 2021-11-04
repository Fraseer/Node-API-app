module.exports = (factory, Models) => {
  factory.define("Author", Models.Author, {
    name: "Fraser Hughes",
    createdAt: new Date(),
    updatedAt: new Date()
  });
};
