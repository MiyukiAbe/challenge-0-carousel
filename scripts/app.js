const image = document.getElementsByClassName('image');

let curNum = 0

//Below is button version 
//const rotateDirection = document.getElementsByClassName('button')
// const rotateImg = function () {
//   let direction = event.target.value
//   if (direction === 'left') {
//     if (curNum === 0) curNum = 3;
//     else curNum--
//     }
//   else if (direction === 'right') {
//     if (curNum === 3) curNum = 0;
//     else curNum++
//   }
//   image[0].style.backgroundImage = "url('./images/hero-image-" + curNum + ".jpg')"
// }

// rotateDirection[0].addEventListener('click', rotateImg)

//Below is auto version
const rotateImg = function () {
    if (curNum === 3) curNum = 0;
    else curNum++

  image[0].style.backgroundImage = "url('./images/hero-image-" + curNum + ".jpg')"
}

setInterval(rotateImg, 1500)