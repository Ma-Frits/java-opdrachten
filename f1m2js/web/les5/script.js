const myTitle = document.getElementById("myTitle");
const myImage = document.getElementById("myImage");
const myInput = document.getElementById("myInput");

const KnopNoord = document.getElementById('KnopNoord');
const KnopOost = document.getElementById('KnopOost');
const KnopZuid = document.getElementById('KnopZuid');
const KnopWest = document.getElementById('KnopWest');

let directionButton ={
    "noord": document.getElementById('KnopNoord');
    "oost": document.getElementById('KnopOost');
    "zuid": document.getElementById('KnopZuid');
    "west": document.getElementById('KnopWest');
}


let current_index = 0;

let lokaties = [
    {
        "titel":"plaats 0",
        "image":"img/0.jpg",
        "direction":{
            "zuid":1

        }
    },
    {
        "titel":"plaats 1",
        "image":"img/1.jpg",
        "direction":{
            "west":2,
            "oost":5,
            "zuid":4,
        }
    
    },  
    {
        "titel":"plaats 2",
        "image":"img/2.jpg",
        "direction":{
            "zuid":3,
            "oost":1,
            
        }
    },
    {
        "titel":"plaats 3",
        "image":"img/3.jpg",
        "direction":{
            "noord":2,

        
        }
    },
    {
        "titel":"plaats 4",
        "image":"img/4.jpg",
        "direction":{
            "noord":1,
        }
    },
    {
        "titel":"plaats 5",
        "image":"img/5.jpg",
        "direction":{
            "noord":10,
            "oost":6,
            "west":1,
        }

    },
    {
        "titel":"plaats 6",
        "image":"img/6.jpg",
        "direction":{
            "west":5,
            "zuid":11,
            "oost":7,
        }
    },
    {
        "titel":"plaats 7",
        "image":"img/7.jpg",
        "direction":{
            "west":6,
            "zuid":8,
            "noord":9,
        }
    },
    {
        "titel":"plaats 8",
        "image":"img/8.jpg",
        "direction":{
            "noord":7,
        }
    },
    {
        "titel":"plaats 9",
        "image":"img/9.jpg",
        "direction":{
            "west":10,
            "zuid":7,
        }
    },
    {
        "titel":"plaats 10",
        "image":"img/10.jpg",
        "direction":{
            "zuid":5,
            "oost":9,
        }
    },
    {
        "titel":"plaats 11",
        "image":"img/11.jpg",
        "direction":{
            "noord":6,
        }
    }
]
//myTitle.innerHTML = "dit is door het script toegevoegd";
//myImage.src = "img/1.jpg";

function show(index){
    myTitle.innerHTML = lokaties[index].titel;
    myImage.src = lokaties[index].image;
    current_index = index;
}
    updateDirections();


function updateDirections(){
    let possible = lokaties[current_index].direction;
    let possible_keys = Object.keys(possible);

    console.log(possible);
    console.log(possible_keys);

}

function getInput(){
    show(myInput.value);
    //console.log(myInput.value)
    myInput.value = "";
    myInput.focus();
    
}

function goDirection(direction){
    let punt_index = lokaties[current_index].direction[direction];
    show(punt_index);
}


show(0);


