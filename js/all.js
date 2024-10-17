document.addEventListener('DOMContentLoaded', function () {
    // Change fav color
    var stars = document.querySelectorAll('.star');
    stars.forEach(function (star) {
        var starIn = star.querySelector('.starIn');

        star.addEventListener('click', function () {
            if (starIn.style.backgroundColor  === 'white') { // white in RGB
                starIn.style.backgroundColor = 'black';
            } else {
                starIn.style.backgroundColor = 'white';
            }

        });
    })
});
