for
for of
while
do while
for in
/////////////
for > it help to iterate over the array and generate series of value

for(i=0;i<5;i++){
    console.log(i)
}
0
1
2
3
4

var city = ['Delhi', 'London', 'Pune', 'Mumbai', 'Amsterdam', 'Nice', 'Newyork', 'Boston']
for(i=0;i<city.length;i++){
    console.log(city[i])
}


var a = ['Delhi', 'London', ['Red','Yellow','Green','Orange'], 'Nice', 'Newyork', 'Boston']
for(i=0;i<a.length;i++){
    if(Array.isArray(a[i])){
        for(j=0;j<a[i].length;j++){
            console.log(a[i][j])
        }
    }else{
        console.log(a[i]) 
    }
}

//////while////
var i = 10;
while(i<5){
    console.log(i);
    i++
}

///do while
var i = 10;
do{
    console.log(i)
    i++
}
while(i<5)

////
var city = ['Delhi', 'London', 'Pune', 'Mumbai', 'Amsterdam', 'Nice', 'Newyork', 'Boston']
for(mycity of city){
    console.log(mycity)
}

var city = ['Delhi', 'London', ['Red','Yellow','Green','Orange'], 'Nice', 'Newyork', 'Boston']

for(mycity of city){
    if(Array.isArray(mycity)){
        for(color of mycity){
            console.log(color)
        }
    }else{
        console.log(mycity)
    }
}

//////////

var movie = {
    name:"Avengers",
    rating:4.5,
    ind:"Hollywood"
}

for(key in movie){
    console.log(key)
}

name
rating
ind


for(key in movie){
    console.log(movie[key])
}