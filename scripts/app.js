const image = document.getElementsByClassName('image');
const rotateDirection = document.getElementsByClassName('button')

let curNum = 0

const rotateImg = function () {
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

rotateDirection[0].addEventListener('click', rotateImg)