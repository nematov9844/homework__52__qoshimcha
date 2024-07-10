let div = document.getElementById('div');
let input4 = document.getElementById('input4');
let input5 = document.getElementById('input5');
let input6 = document.getElementById('input6');



if (div && input6) {
  input6.addEventListener('input', function() {
    let inputValue = this.value.trim();
    if (isNaN(inputValue)) {
      div.style.width = '100%';
      div.style.height = '100%';
    } else {
      div.style.width = `${inputValue}%`;
      div.style.height = `${inputValue}%`;
    }
  });
}



if (div && input5) {
  input5.addEventListener('input', function() {
    let inputValue = this.value.trim();
    if (isNaN(inputValue)) {
      div.style.transform = 'rotate(0deg)';
    } else {
      div.style.transform = `rotate(${inputValue * 2}deg)`;
    }
  });
}

if (div && input4) {
  input4.addEventListener('input', function() {
    let inputValue = this.value.trim();
    if (isNaN(inputValue)) {
      img.style.borderRadius = '0';
    } else {
      img.style.borderRadius = `${inputValue}%`;
    }
  });
}

console.log(div ? div.classList.value : 'div elementi topilmadi');
