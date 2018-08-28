describe("verify calculator functions", function(){
    let a = 8;
    let b = 4;
    let add = a + b;
    let subtr = a - b;
    let mult = a * b;
    let div = a / b;

    it("addition", function(){
        expect(add).toBe(12, "addition failed");
    })

    it("subtraction", function(){
        expect(subtr).toBe(4, "substraction failed");
    })

    it("multiplication", function(){
        expect(mult).toBe(32, "multiplication failed");
    })

    it("division", function(){
        expect(div).toBe(2, "division failed");
    })
})