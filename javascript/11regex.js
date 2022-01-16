regular expression
^$

// if pattern does not match it will return null else array

// exact one word between a-z
var a = "hi"
a.match("^([a-z])$")
null

var a = "h"
a.match("^([a-z])$")
(2) ['h', 'h', index: 0, input: 'h', groups: undefined]

// exact two words between a-z
var a = "hi"
a.match("^([a-z]{2})$")

// range  words between 2-5 a-z
var a = "hi"
a.match("^([a-z]{2,5})$")
var a = "hiii"
a.match("^([a-z]{2,5})$")
(2) ['hiii', 'hiii', index: 0, input: 'hiii', groups: undefined]
var a = "h"
a.match("^([a-z]{2,5})$")
null
var a = "Hiii"
a.match("^([a-z]{2,5})$")
null

// any length a-z
var a = "hi"
a.match("^([a-z]+)$")
(2) ['hi', 'hi', index: 0, input: 'hi', groups: undefined]

var a = "hi"
a.match("^([A-Za-z]+)$")
(2) ['hi', 'hi', index: 0, input: 'hi', groups: undefined]
var a = "Hi"
a.match("^([A-Za-z]+)$")
(2) ['Hi', 'Hi', index: 0, input: 'Hi', groups: undefined]
var a = "Hi"
a.match("^([A-Ca-z0-9]+)$")
null

var a = 8763546271
a.match("^[0-9]{10}$")

var a = 8763546271
a.match("^[0-9]{10}$")
VM166:2 Uncaught TypeError: a.match is not a function
    at <anonymous>:2:3
(anonymous) @ VM166:2
var a = 8763546271
a.toString().match("^[0-9]{10}$")
['8763546271', index: 0, input: '8763546271', groups: undefined]

var str = "this hat is hot and heat"

var str = "this hat is hot and heat"
undefined
str.match(/h.t/g)
(2) ['hat', 'hot']
str.match(/h.t/)
['hat', index: 5, input: 'this hat is hot and heat', groups: undefined]0: "hat"groups: undefinedindex: 5input: "this hat is hot and heat"length: 1[[Prototype]]: Array(0)
str.match(/h..t/)
['heat', index: 20, input: 'this hat is hot and heat', groups: undefined]
str.match(/h..t/g)
['heat']


var email = "a@a.com"
email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")
(4) ['a@a.com', 'a', 'a', 'com', index: 0, input: 'a@a.com', groups: undefined]
var email = "@a.com"
email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")
null
var email = "a@"
email.match("^([a-zA-Z0-9$]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")
null
var email = "a@a"
email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")
null