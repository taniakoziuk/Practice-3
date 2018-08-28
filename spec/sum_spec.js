describe("verify correct sum of the two given integers", function(){
    let a = 1;
    let b = 2;
    let c = a + b;

    it("computes correct sum", function(){
        expect(c).toBe(3);
    })
})