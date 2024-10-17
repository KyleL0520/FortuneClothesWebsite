const fortune = document.querySelector('.Fortune');

setTimeout(() => {
    fortune.classList.add('change-place');
    fortune.style.borderRight = '0px';
    setTimeout(() => {
        window.location.replace('Home.html');
    }, 1500);
}, 3500);