//parseInt(string, radix) //radix: Optional. A number (from 2 to 36) that represents the numeral system to be used
var iNum1 = parseInt("1234blue"); //returns 1234
var iNum2 = parseInt("0xA"); //returns 10
var iNum3 = parseInt("22.5"); //returns 22
var iNum4 = parseInt("blue"); //returns NaN
var iNum1 = parseInt("111", 2); //returns 7
var iNum2 = parseInt("10", 8); //returns 8
var iNum2 = parseInt("10", 10); //returns 10
//Some examples of using parseFloat(string) :
var fNum1 = parseFloat("1234blue"); //returns 1234
var fNum2 = parseFloat("0xA"); //returns 0
var fNum3 = parseFloat("22.5"); //returns 22.5
var fNum4 = parseFloat("22.34.5"); //returns 22.34
var fNum5 = parseFloat("0908"); //returns 908
var fNum6 = parseFloat("blue"); //returns NaN
