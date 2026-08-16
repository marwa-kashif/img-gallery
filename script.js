let images=document.querySelectorAll(".gallery img");

let current=0;

function openLightbox(src){

document.getElementById("lightbox").style.display="flex";

document.getElementById("lightbox-img").src=src;

images.forEach((img,index)=>{

if(img.src===src){

current=index;

}

});

}

function closeLightbox(){

document.getElementById("lightbox").style.display="none";

}

function changeImage(step){

current+=step;

if(current>=images.length) current=0;

if(current<0) current=images.length-1;

document.getElementById("lightbox-img").src=images[current].src;

}

function filterSelection(category){

let items=document.querySelectorAll(".image");

items.forEach(item=>{

if(category==="all"){

item.style.display="block";

}

else{

item.style.display=item.classList.contains(category)?"block":"none";

}

});

document.querySelectorAll(".filter-buttons button").forEach(btn=>btn.classList.remove("active"));

event.target.classList.add("active");

}