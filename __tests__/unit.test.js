// unit.test.js

const { TimeoutSettings } = require('puppeteer');
const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
//

// Test for function.isPhoneNumber
test("1) Testing with a valid phone number",()=>{
    expect(functions.isPhoneNumber("408-345-1783")).toBe(true);
})

test("2) Testing with a valid phone number",()=>{
    expect(functions.isPhoneNumber("408-532-1143")).toBe(true);
})
test("3) Testing with a invalid phone number",()=>{
    expect(functions.isPhoneNumber("4081111115321111143")).toBe(false);
})
test("4) Testing with a invalid phone number",()=>{
    expect(functions.isPhoneNumber("408753201143")).toBe(false);
})


//Test for function.isEmail
test("5) Testing with a valid email",()=>{
    expect(functions.isEmail("riyu@ucsd.edu")).toBe(true);
})

test("6) Testing with a valid email",()=>{
    expect(functions.isEmail("Richard511011@gmail.com")).toBe(true);
})
test("7) Testing with a invalid email",()=>{
    expect(functions.isEmail("riyu@ucsd")).toBe(false);
})

test("8) Testing with a invalid email",()=>{
    expect(functions.isEmail("Richard511011gmail.com")).toBe(false);
})

//Testing for functions.isStrongPassword

test("9) Testing with a strong password",()=>{
    expect(functions.isStrongPassword("r1234567")).toBe(true);
})
test("10) Testing with a strong password",()=>{
    expect(functions.isStrongPassword("pwqejfhbasl")).toBe(true);
})
test("11) Testing with a weak password",()=>{
    expect(functions.isStrongPassword("Yoo")).toBe(false);
})
test("12) Testing with a weak password",()=>{
    expect(functions.isStrongPassword("pwqejfhbaslpwqejfhbasl")).toBe(false);
})

//Testing for function.isDate
test("13) Testing with a valid date",()=>{
    expect(functions.isDate("4/24/2000")).toBe(true);
})
test("14) Testing with a valid date",()=>{
    expect(functions.isDate("12/1/2020")).toBe(true);
})
test("15) Testing with a invalid date",()=>{
    expect(functions.isDate("1212020")).toBe(false);
})
test("16) Testing with a invalid date",()=>{
    expect(functions.isDate("4/12/20")).toBe(false);
})

//Testing for functions.isHexColor

test("17) Testing with a valid hex color",()=>{
    expect(functions.isHexColor("ABCABC")).toBe(true);
})
test("18) Testing with a valid hex color",()=>{
    expect(functions.isHexColor("ABCAB0")).toBe(true);
})
test("19) Testing with a valid hex color",()=>{
    expect(functions.isHexColor("ABCABZ")).toBe(false);
})
test("20) Testing with a valid hex color",()=>{
    expect(functions.isHexColor("ZBCA87")).toBe(false);
})