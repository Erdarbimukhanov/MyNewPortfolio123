let circles = document.getElementById("circles");
let o = document.getElementById("o")
for(let j = 0; j < 5; j++){
    oclone = o.cloneNode(true);
    circles.appendChild(oclone);
}
for(let i = 0; i < 6; i++){
    circlesclone = circles.cloneNode(true);
    thirdslide.appendChild(circlesclone);
}
