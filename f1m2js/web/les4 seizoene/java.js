const mytitle = document.getElementById('mytitle');
const myimage = document.getElementById('myimage');

let seizoenen = [
    {
        "title":"seizoenen",
        "image":"img/seasons.jpg",
        "background":"gray"
    },
    {
        "title":"lente",
        "image":"img/spring.jpg",
        "background":"green"
    },
    {
        "title":"zomer",
        "image":"img/summer.jpg",
        "background":"yellow"
    },
    {
        "title":"herfst",
        "image":"img/herfst.jpg",
        "background":"brown"
    },
    {
        "title":"winter",
        "image":"img/winter.jpg",
        "background":"white"
    }
];

// let seizoen = {
//     "title":"lente",
//     "image":"img/spring.jpg"
// };


function show(index){
    mytitle.innerHTML = seizoenen[index].title;
    myimage.src = seizoenen[index].image;
    document.body.style.background = seizoenen[index].background;
}
