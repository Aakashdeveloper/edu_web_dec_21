var a = true;
var b = true;
a+b
2
true+false
1
10+true
11
10/false
Infinity

true is equal to 1
false is equal to 0


"hi"+true
'hitrue'
"hi"-true
NaN
"true"+"true"
'truetrue'
10+"true"
'10true'
"true"-"true"
NaN

///////
var a = "10"
var b = "20"

//es5
var a = "10"
var b = "20"
undefined
parseInt(a)
10
parseInt(a)+parseInt(b)
30
var a = "10a"
undefined
var a = "hia"
undefined
parseInt(a)
NaN

var a = "10.22"
var b = "20.11"
parseInt(a)+parseInt(b)
30
parseFloat(a)+parseFloat(b)
30.33

var a = "10"
var b = "20"
parseFloat(a)+parseFloat(b)
30

//es6
var a = "10.22"
var b = "20.11"
Number(a)+Number(b)
30.33

var a = "10delhi"
var b = "delhi10"
var c = "10delhi20"

parseInt(a)
10
parseInt(b)
NaN
parseInt(c)
10

Number(a)
NaN
Number(b)
NaN
Number(c)
NaN


var a = 10
var b = "hi"
var c = "10"

isNaN(a)
false
isNaN(b)
true
isNaN(c)
false

var d = "10a"
isNaN(d)
true

for string return true
for number returb false