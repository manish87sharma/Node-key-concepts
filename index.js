function test (name, ...rest) {
    console.log(rest);
}

test("manish","1")
test("manish",...[1,2,5])