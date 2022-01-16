var name = "Avengers";
var rating = 4.5
var ind = "Hollywood"

var name1 = "Jab We Met";
var rating1 = 4.8
var ind1 = "Bollywood"

var movie = {
    name:"Avengers",
    rating:4.5,
    ind:"Hollywood"
}
undefined
movie
{name: 'Avengers', rating: 4.5, ind: 'Hollywood'}
movie.name
'Avengers'
movie.rating
4.5
movie.ind
'Hollywood'
movie
{name: 'Avengers', rating: 4.5, ind: 'Hollywood'}
movie.type="Action"
'Action'
movie
{name: 'Avengers', rating: 4.5, ind: 'Hollywood', type: 'Action'}
movie.rating = 4.8
4.8
movie
{name: 'Avengers', rating: 4.8, ind: 'Hollywood', type: 'Action'}
delete movie.ind
true
movie
{name: 'Avengers', rating: 4.8, type: 'Action'}

movie['name']
'Avengers'
movie['rating']
4.5

///JSON
> JavaScript Object notation

var movies = [
    {
        name:"Avengers",
        rating:4.5,
        ind:"Hollywood"
    },
    {
        name:"Jab We Met",
        rating:4.8,
        ind:"Bollywood"
    }
]