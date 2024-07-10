    // JavaScript kodini shu yerga yozishingiz mumkin
    const img = document.getElementById('img');
    const input1 = document.getElementById('input1');
    const input2 = document.getElementById('input2');
    const input3 = document.getElementById('input3');

    input1.addEventListener('input', () => {
        img.style.filter = `brightness(${input1.value}%)`;
    });

    input2.addEventListener('input', () => {
        img.style.filter = `contrast(${input2.value}%)`;
    });

    input3.addEventListener('input', () => {
        img.style.filter = `saturate(${input3.value}%)`;
    });


let   input = document.getElementById('input');

input.addEventListener('change', () => {
    img.src = URL.createObjectURL(input.files[0])
})

