describe("verify comparig of two given numbers", function(){
    let a = 50;
    let b = 10;

    function compare(){
        return a === b;
    }

    compare(a, b);

    it("compare numbers", function(){
        expect(compare()).toBe(true);
    })
})