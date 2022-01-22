//array is a collection of homogeneous as well as heterogeneous datatype
var a = [1,6,4,8,33,67] >> array of number
var b = ['dsf','dv','ddfd','dd'] >> array of string
var c = [true,true,false,true] >> array of boolean 

var d = [3,7,'gdv',true,true,'dvf',434,"ddfb",true]

var city = ["Delhi",'London',"Mumbai","Amsterdam","Venice"]

city.length
5
city[0]
'Delhi'
city[1]
'London'
city[city.length-1]
'Venice'

city.push("Helsinki")
6
city
(6) ['Delhi', 'London', 'Mumbai', 'Amsterdam', 'Venice', 'Helsinki']
city.push("Boston")
7
city
(7) ['Delhi', 'London', 'Mumbai', 'Amsterdam', 'Venice', 'Helsinki', 'Boston']

var city = ['Delhi', 'London', 'Mumbai', 'Amsterdam', 'Venice', 'Helsinki', 'Boston']
city.pop()
'Boston'
city
(6) ['Delhi', 'London', 'Mumbai', 'Amsterdam', 'Venice', 'Helsinki']
city.pop(3)

var city = ['Delhi', 'London', 'Mumbai', 'Amsterdam', 'Venice', 'Helsinki', 'Boston']
undefined
city.pop()
'Boston'
city
(6) ['Delhi', 'London', 'Mumbai', 'Amsterdam', 'Venice', 'Helsinki']
city.pop(3)
'Helsinki'
city.pop(3000)
'Venice'
var city = ['Delhi', 'London', 'Mumbai', 'Amsterdam', 'Venice', 'Helsinki', 'Boston']
city.shift()
'Delhi'
city.unshift('Dubai')
7
city
(7) ['Dubai', 'London', 'Mumbai', 'Amsterdam', 'Venice', 'Helsinki', 'Boston']

push> Add the  value in the end of the array
pop > remove the last value of array
shift > remove the first value of Array
unshift > Add the value in the beginning of array

var city = ['Delhi', 'London', 'Mumbai', 'Amsterdam', 'Venice', 'Helsinki', 'Boston']
city.slice(1)
(6) ['London', 'Mumbai', 'Amsterdam', 'Venice', 'Helsinki', 'Boston']
city.slice(2)
(5) ['Mumbai', 'Amsterdam', 'Venice', 'Helsinki', 'Boston']
city
(7) ['Delhi', 'London', 'Mumbai', 'Amsterdam', 'Venice', 'Helsinki', 'Boston']
city.slice(2,6)
(4) ['Mumbai', 'Amsterdam', 'Venice', 'Helsinki']
city.slice(-1)
['Boston']
city.slice(-2)
(2) ['Helsinki', 'Boston']
city.slice(0,-1)
(6) ['Delhi', 'London', 'Mumbai', 'Amsterdam', 'Venice', 'Helsinki']



city.splice(start,deletecount,values)

var city = ['Delhi', 'London', 'Mumbai', 'Amsterdam', 'Venice', 'Helsinki', 'Boston']
// remove 1 value on index 3
city.splice(3,1)
// remove 2 value on index 4 and add 2 value
city.splice(4,2,'Nice','Newyork')
(2) ['Venice', 'Helsinki']
city
(7) ['Delhi', 'London', 'Mumbai', 'Amsterdam', 'Nice', 'Newyork', 'Boston']
// do not remove value but add 1 value at index 2
city.splice(2,0,'Pune')
[]
['Delhi', 'London', 'Pune', 'Mumbai', 'Amsterdam', 'Nice', 'Newyork', 'Boston']
city.indexOf('Delhi')
0
city.indexOf('Nice')
5
city.indexOf('Dubai')
-1
city.indexOf('Venice')
-1

var a = ['a','b','c',2]
var b = [3,4,'f','g',1]
a+b
'a,b,c,23,4,f,g,1'
a.concat(b)
['a', 'b', 'c', 2, 3, 4, 'f', 'g', 1]

var a = "hi"
var b = [10]

Array.isArray(a)
false
Array.isArray(b)
true

var a = ['Delhi', 'London', ['Red','Yellow','Green',['BMW','AUDI',"Merc"],'Orange'], 'Nice', 'Newyork', 'Boston']

a[0]
'Delhi'
a[2]
(5) ['Red', 'Yellow', 'Green', Array(3), 'Orange']
a[2][1]
'Yellow'
a[2][3]
(3) ['BMW', 'AUDI', 'Merc']
a[2][3][0]
'BMW'