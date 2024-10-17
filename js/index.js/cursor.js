const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

circles.forEach(function (circle) {
    circle.x = 0;
    circle.y = 0;
});

window.addEventListener("mousemove", function (e) {
    coords.x = e.clientX;
    coords.y = e.clientY;

    animateCircles();
});

function animateCircles() {

    let x = coords.x;
    let y = coords.y;

    circles.forEach(function (circle, index) {
        
        /*Place the circle close to the cursor but due to the cursor: none in css it's hard to see the differnt*/
        circle.style.left = x - 7 + "px";
        circle.style.top = y - 7 + "px";

        circle.x = x;
        circle.y = y;
    });
}

/*Change cursor color from black to white when hover and then change it back*/
document.querySelectorAll('a').forEach(item => {
    item.addEventListener('mouseenter', () => {
        circles.forEach(circle => {
            circle.style.backgroundColor = 'white';
        });
    });

    
    item.addEventListener('mouseleave', () => {
        circles.forEach(circle => {
            circle.style.backgroundColor = 'black';
        });
    });
    
});

document.querySelectorAll('.sideBar').forEach(item => {
    item.addEventListener('mouseenter', () => {
        circles.forEach(circle => {
            circle.style.backgroundColor = 'white';
        });
    });

    
    item.addEventListener('mouseleave', () => {
        circles.forEach(circle => {
            circle.style.backgroundColor = 'black';
        });
    });
    
});

document.querySelectorAll('input').forEach(item => {
    item.addEventListener('mouseenter', () => {
        circles.forEach(circle => {
            circle.style.backgroundColor = 'white';
        });
    });

    
    item.addEventListener('mouseleave', () => {
        circles.forEach(circle => {
            circle.style.backgroundColor = 'black';
        });
    });
    
});

document.querySelectorAll('span').forEach(item => {
    item.addEventListener('mouseenter', () => {
        circles.forEach(circle => {
            circle.style.backgroundColor = 'white';
        });
    });

    
    item.addEventListener('mouseleave', () => {
        circles.forEach(circle => {
            circle.style.backgroundColor = 'black';
        });
    });
    
});

