var name = "Avengers"
var rating = 4.5
var type = "Action"
var ind = "Hollywood"

//es5
var a = "An "+name+" is an "+type+" movie with the rating of "+rating+" from ind "+ind+"."
'An Avengers is an Action movie with the rating of 4.5 from ind Hollywood.'

//es6
var b = `An ${name} is an ${type} movie with the rating of ${rating} from ind ${ind}.`
'An Avengers is an Action movie with the rating of 4.5 from ind Hollywood.'