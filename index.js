const colors = ['darkcyan', 'green', 'pink', 'orange', 'aquamarine'];

const button = document.querySelector('.change-color-button');
const background = document.querySelector('.background');
const colorBar = document.querySelector('.color-bar-info');


const changeColor = () =>{
    let random = Math.floor(Math.random() * colors.length);
    background.style.backgroundColor = colors[random];
    colorBar.innerHTML = `Background Color: ${colors[random]}`
    colorBar.style.textTransform = 'capitalize';
    
}

button.addEventListener('click', changeColor);

o