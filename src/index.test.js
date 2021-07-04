const library = require("./");

test("helloWorld", () => {
    console.log = jest.fn();
    
    expect(console.log.mock.calls[0][0]).toBe("Hello World!");
})
