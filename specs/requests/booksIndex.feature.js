let request, response;

before((done) => {
  request = serverConfig(done);
});

beforeEach(async () => {
  let author = await factory.create("Author");
  await factory.create("Book", { AuthorId: author.id });
});

afterEach(async () => {
  await factory.cleanUp();
});

describe("GET /api/books", () => {
  beforeEach(async () => {
    response = await request.get("/api/books");
  });

  it.only("is expected to respond with status 200", () => {

    expect(response.status).to.equal(200);
  });

  it("is expected to respond with a list of 1 book", () => {
    expect(response.body["books"].length).to.equal(1);
  });

  // describe("resource properties", () => {
  //   it("is expected to include :message & :nextStep", () => {
  //     const expectedJson = [
  //       {
  //         message: "Your API is working",
  //         nextStep: "Go on and create some magic!",
  //       },
  //     ];
  //     expect(response.body["resources"]).to.deep.equal(expectedJson);
  //   });
  // });
});
