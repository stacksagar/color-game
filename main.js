// Import Class and ID From HTML
const refresh = document.querySelector('#refreshMain');
const rgbShow = document.querySelector('#rgbShow');
const refreshImg = document.querySelector('.refreshImg');
const refreshText = document.querySelector('.refreshText');
const message = document.querySelector('.message');
const headerBorder = document.querySelector('.headerBorder');
const easy = document.querySelector('.easy');
const hard = document.querySelector('.hard');
const allBox = document.querySelectorAll('.box');

// This function for Generate Random RGB Color
function generateRandomColor(number) {
  let = rgbcolors = [];
  for (let i = 0; i < number; i++) {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    let rgb = `rgb(${r}, ${g}, ${b})`;
    rgbcolors.push(rgb);
  }
  return rgbcolors;
}
let colors = [...generateRandomColor(6)];

// Here Set All Box Background Color
for (let i = 0; i < allBox.length; i++) {
  allBox[i].style.backgroundColor = colors[i];
}
let randomNumber = Math.floor(Math.random() * colors.length);
let pickOneColor = colors[randomNumber];
rgbShow.innerHTML = pickOneColor;

// Box Click Condition Set
for (let i = 0; i < allBox.length; i++) {
  allBox[i].addEventListener('click', function () {
    let chooseColor = this.style.backgroundColor;
    if (chooseColor == pickOneColor) {
      message.innerHTML = "<p class='text-success'> Color Matched! </p> ";
      setTimeout(() => {
        message.innerHTML = "<p class='text-success'> you'r win! </p> ";
      }, 400);
      refreshText.innerHTML = 'Play again!';
      headerBorder.style.border = '10px solid ' + pickOneColor;
      for (const box of allBox) {
        box.style.backgroundColor = pickOneColor;
      }
    } else {
      this.style.backgroundColor = 'transparent';
      message.innerHTML = "<p class='text-wrong'> Don't Matched! </p> ";
      setTimeout(() => {
        message.innerHTML = "<p class='text-wrong'> Try again! </p> ";
      }, 400);
    }
  });
}

// This variable for game mode => Easy & Hard
let gameMode = 'hard';

// this function for set Header Border Color
function borderUnset() {
  headerBorder.style.border = '10px solid #00000060';
}

// This function for => Easy Button, Hard Button & Refresh Button
function easyHardRefresh() {
  for (let i = 0; i < allBox.length; i++) {
    allBox[i].style.backgroundColor = colors[i];
  }
  randomNumber = Math.floor(Math.random() * colors.length);
  pickOneColor = colors[randomNumber];
  rgbShow.innerHTML = pickOneColor;
}

// Easy Game Mode Button
easy.addEventListener('click', () => {
  borderUnset();
  gameMode = 'easy';
  allBox[3].style.display = 'none';
  allBox[4].style.display = 'none';
  allBox[5].style.display = 'none';
  easy.classList.add('btn-focus');
  hard.classList.remove('btn-focus');
  colors = [...generateRandomColor(3)];
  easyHardRefresh();
});

// Hard Game Mode Button
hard.addEventListener('click', () => {
  borderUnset();
  gameMode = 'hard';
  allBox[3].style.display = 'block';
  allBox[4].style.display = 'block';
  allBox[5].style.display = 'block';
  easy.classList.remove('btn-focus');
  hard.classList.add('btn-focus');
  colors = [...generateRandomColor(6)];
  easyHardRefresh();
});

// Refresh Button with all item reset default
refresh.addEventListener('click', () => {
  if (gameMode == 'hard') {
    colors = [...generateRandomColor(6)];
  } else {
    colors = [...generateRandomColor(3)];
  }
  easyHardRefresh();

  refreshText.innerHTML = 'Refresh';
  message.innerHTML = ' Select Color ';
  refreshImg.classList.add('spin');
  setTimeout(() => {
    refreshImg.classList.remove('spin');
  }, 1000);
  borderUnset();
});
