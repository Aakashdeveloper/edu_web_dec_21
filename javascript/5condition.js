= // assignment
== // compare the data
=== // compare the data and datatypes

var a = 10 // assign value 10 to a
var b = "10"

a==b  // comparing the data
true
a===b // comparing the data and datatypes
false

var c = 20
a == c
false

var a = "John"
var b = "john"
// case sensitive
a == b
false
a === b
false

10>20
false
20>10
true

10=>11
VM1453:1 Uncaught SyntaxError: Malformed arrow function parameter list

10>=11
false
10<=11
true
10!=11
true

// negation 
var a = true
!a
false

var a = false
!a
true

var a = 1
!a
false

var a = 0
!a
true

var a = -1
!a
false

var a = "Hi"
!a
false

/// truthy
> any number except 0 weather +ve of -ve , true , any string

// falsy
> 0 , false, null, undefined