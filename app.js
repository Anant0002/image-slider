// let nextDom = document.getElementById('next');
// let prevDom = document.getElementById('prev');
// let carouselDom = document.querySelectorAll('.carousel');
// let listItemDom = document.querySelectorAll('.carousel .list');
// let thumbnailDom = document.querySelectorAll('.carousel .thumbnail');

// nextDom.onclick = function(){
//     showSlider('next');
// }
// prevDom.onclick = function(){
//     showSlider('prev');
// }
// let timeRunning = 3000;
// let runTimeOut;
// function showSlider(type){
//     let itemSlider = document.querySelectorAll('.carousel .list .item');
//     let itemThumbnail = document.querySelectorAll('.carousel .thumbnail .item');


//     if(type == 'next'){
//         listItemDom.appendChild(itemSlider[0]);
//         thumbnailDom.appendChild(itemThumbnail[0]);
//         carouselDom.classList.add('next');
//     }else{
//         let positionLastItem = itemSlider.length - 1;
//         listItemDom.prepend(itemSlider(positionLastItem));
//         thumbnailDom.prepend(itemThumbnail(positionLastItem));
//         carouselDom.classList.add('prev');
//     }

//     clearTimeout(runTimeOut);
//     runTimeOut = setTimeout(() =>{
//         carouselDom.classList.remove('next');
//     },timeRunning)
// }
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let carouselDom = document.querySelector('.carousel');
let listItemDom = document.querySelector('.carousel .list');
let thumbnailDom = document.querySelector('.carousel .thumbnail');

nextDom.onclick = function () {
  showSlider('next');
};
prevDom.onclick = function () {
  showSlider('prev');
};

let timeRunning = 2000; // Adjust animation time to match CSS if needed
let runTimeOut;

function showSlider(type) {
  let itemSlider = document.querySelectorAll('.carousel .list .item');
  let itemThumbnail = document.querySelectorAll('.carousel .thumbnail .item');

  if (type == 'next') {
    carouselDom.classList.add('next');
    // Move the first item to the end for next slide
    listItemDom.appendChild(itemSlider[0]);
    thumbnailDom.appendChild(itemThumbnail[0]);
  } else {
    carouselDom.classList.add('prev');
    // Move the last item to the front for prev slide
    let positionLastItem = itemSlider.length - 1;
    listItemDom.prepend(itemSlider[positionLastItem]);
    thumbnailDom.prepend(itemThumbnail[positionLastItem]);
  }

  clearTimeout(runTimeOut);
  runTimeOut = setTimeout(() => {
    carouselDom.classList.remove('next');
    carouselDom.classList.remove('prev');
  }, timeRunning);
}