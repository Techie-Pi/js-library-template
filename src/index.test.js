const library = require("./");

test("helloWorld", () => {
    console.log = jest.fn();
    
    library.helloWorld();
    
    expect(console.log).toHaveBeenCalledWith("Hello World!");
})
