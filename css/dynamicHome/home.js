var url = "https://zomatoajulypi.herokuapp.com/location"
var rurl = "https://zomatoajulypi.herokuapp.com/restaurant?stateId="

function getCity(){
    fetch(url)
    // return the promise
    .then((res) =>  res.json())
    // return the data
    .then((data) => {
        console.log(data)
        for(i=0;i<data.length;i++){
            var element = document.createElement('option'); ///<option></option>
            var text = document.createTextNode(data[i].state); // delhi
            element.appendChild(text); // <option>delhi</option>
            element.value = data[i].state_id// <option value="1">delhi</option>
            document.getElementById('city').appendChild(element);
            //<select><option value="1">delhi</option></select>
        }
    })
}

var getRest = async () => {
    var cityId = document.getElementById('city').value;
    var rest = document.getElementById('restSelect')
    while(rest.length>0){
        rest.remove(0)
    }
    let response = await fetch(`${rurl}${cityId}`)
    let data = await response.json()
    for(i=0;i<data.length;i++){
        var element = document.createElement('option');
        var text = document.createTextNode(`${data[i].restaurant_name}`);
        element.appendChild(text);
        rest.appendChild(element);
    }
}

// var getRest = () => {
//     var cityId = document.getElementById('city').value;
//     var rest = document.getElementById('restSelect')
//     while(rest.length>0){
//         rest.remove(0)
//     }
//     fetch(`${rurl}${cityId}`)
//     // return the promise
//     .then((res) =>  res.json())
//     // return the data
//     .then((data) => {
//         console.log(data)
//         for(i=0;i<data.length;i++){
//             var element = document.createElement('option');
//             var text = document.createTextNode(`${data[i].restaurant_name}`);
//             element.appendChild(text);
//             rest.appendChild(element);
//         }
//     })
// }