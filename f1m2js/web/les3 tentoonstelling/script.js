const myimage = document.getElementById('myimage')
const mytitles = document.getElementById('mytitles')

let paintings = ["img/painting0.jpg", "img/painting1.jpg", "img/painting2.jpg", "img/painting3.jpg", "img/painting4.jpg", "img/painting5.jpg"];

let titles = [
    "De schildderijen van van gogh",
    "De rode wijngaard ",
    "De sterrennacht",
    "Sterrennacht boven de Rhone ",
    "Zonnebloemen",
    "Boerderij in de provence "
];

function changeimage(index){
    mytitles.innerHTML = titles[index];
    myimage.src = paintings[index];
}
