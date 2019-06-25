
let curNum = 0
const image = document.getElementsByClassName('image');

//Every 5 seconds image will change

const rotateImg = function () {
    if (curNum === 3) curNum = 0;
    else curNum++
  image[0].style.backgroundImage = "url('./images/hero-image-" + curNum + ".jpg')"
}
setInterval(rotateImg, 5000)

//User can change images by clicking buttons
const changeImgByButton = function () {
  let direction = event.target.value
  if (direction === 'left') {
    if (curNum === 0) curNum = 3;
    else curNum--
    }
  else if (direction === 'right') {
    if (curNum === 3) curNum = 0;
    else curNum++
  }
  image[0].style.backgroundImage = "url('./images/hero-image-" + curNum + ".jpg')"
}

const rotateDirection = document.getElementsByClassName('button')
rotateDirection[0].addEventListener('click', changeImgByButton)

