document.addEventListener('DOMContentLoaded', function () {
    const newMan = document.querySelector('.newMan');
    const manImg = newMan.querySelectorAll('img');
    const newWoman = document.querySelector('.newWoman');
    const womanImg = newWoman.querySelectorAll('img');
    let manIndex = 0;
    let womanIndex = 0;
    let lastManSlideTime = 0;
    let lastWomanSlideTime = 0;

    manImg[0].style.display = 'block';
    womanImg[0].style.display = 'block';

    /*Man img slide automatically*/
    function automaticNewManSlide(timestamp) {
        if (!lastManSlideTime)
            lastManSlideTime = timestamp;
        const elapsedManTime = timestamp - lastManSlideTime;

        if (elapsedManTime >= 3000) {
            manImg.forEach(img => {
                img.classList.remove('active');
                img.style.animation = '';
                img.style.display = 'none';
            });

            const prevManIndex = manIndex;
            manIndex = (manIndex + 1) % manImg.length;
            const currentImg = manImg[manIndex];
            const prevImg = manImg[prevManIndex];

            currentImg.style.display = 'block';
            prevImg.style.display = 'block';

            switch (manIndex % manImg.length) {
                case 0:
                    currentImg.style.animation = 'slideFromRight 1.5s forwards';
                    prevImg.style.animation = 'slideToLeft 1.5s forwards';
                    break;
                case 1:
                    currentImg.style.animation = 'slideFromTop 1.5s forwards';
                    prevImg.style.animation = 'slideToBottom 1.5s forwards';
                    break;
                case 2:
                    currentImg.style.animation = 'slideFromLeft 1.5s forwards';
                    prevImg.style.animation = 'slideToRight 1.5s forwards';
                    break;
                case 3:
                    currentImg.style.animation = 'slideFromBottom 1.5s forwards';
                    prevImg.style.animation = 'slideToTop 1.5s forwards';
                    break;
            }

            currentImg.classList.add('active');
            setTimeout(() => {
                prevImg.style.display = 'none';
            }, 1500);
            lastManSlideTime = timestamp;
        }

        requestAnimationFrame(automaticNewManSlide);
    }

    /*Woman img slide automatically*/
    function automaticNewWomanSlide(timestamp) {
        if (!lastWomanSlideTime)
            lastWomanSlideTime = timestamp;
        const elapsedWomanTime = timestamp - lastWomanSlideTime;

        if (elapsedWomanTime >= 3000) {
            womanImg.forEach(img => {
                img.classList.remove('active');
                img.style.animation = '';
                img.style.display = 'none';
            });

            const prevWomanIndex = womanIndex;
            womanIndex = (womanIndex + 1) % womanImg.length;
            const currentImg = womanImg[womanIndex];
            const prevImg = womanImg[prevWomanIndex];

            currentImg.style.display = 'block';
            prevImg.style.display = 'block';


            switch (womanIndex % womanImg.length) {
                case 0:
                    currentImg.style.animation = 'slideFromBottom 1.5s forwards';
                    prevImg.style.animation = 'slideToTop 1.5s forwards';
                    break;
                case 1:
                    currentImg.style.animation = 'slideFromRight 1.5s forwards';
                    prevImg.style.animation = 'slideToLeft 1.5s forwards';
                    break;
                case 2:
                    currentImg.style.animation = 'slideFromTop 1.5s forwards';
                    prevImg.style.animation = 'slideToBottom 1.5s forwards';
                    break;
                case 3:
                    currentImg.style.animation = 'slideFromLeft 1.5s forwards';
                    prevImg.style.animation = 'slideToRight 1.5s forwards';
                    break;
            }

            currentImg.classList.add('active');
            setTimeout(() => {
                prevImg.style.display = 'none';
            }, 1500);
            lastWomanSlideTime = timestamp;
        }

        requestAnimationFrame(automaticNewWomanSlide)

    }

    /*Man nav menu*/
    const navManMenu = document.querySelector('.navManMenu');
    const manUnderLogo = document.querySelector('.manUnderLogo');

    manUnderLogo.addEventListener('mouseover', function () {
        navManMenu.style.opacity = '1';
        navManMenu.style.visibility = 'visible';
    })

    navManMenu.addEventListener('mouseover', function () {
        navManMenu.style.opacity = '1';
        navManMenu.style.visibility = 'visible';
    })

    navManMenu.addEventListener('mouseout', function () {
        navManMenu.style.opacity = '0';
    })

    /*It's to show the opacity transition instead of hidden immediately*/
    navManMenu.addEventListener('transitionend', function (e) {
        if (e.propertyName === 'opacity' && navManMenu.style.opacity === '0') {
            navManMenu.style.visibility = 'hidden';
        }
    })

    /*Woman nav menu*/
    const navWomanMenu = document.querySelector('.navWomanMenu');
    const womanUnderLogo = document.querySelector('.womanUnderLogo');

    womanUnderLogo.addEventListener('mouseover', function () {
        navWomanMenu.style.opacity = '1';
        navWomanMenu.style.visibility = 'visible';
    })

    navWomanMenu.addEventListener('mouseover', function () {
        navWomanMenu.style.opacity = '1';
        navWomanMenu.style.visibility = 'visible';
    })

    navWomanMenu.addEventListener('mouseout', function () {
        navWomanMenu.style.opacity = '0';
    })

    /*It's to show the opacity transition instead of hidden immediately*/
    navWomanMenu.addEventListener('transitionend', function (e) {
        if (e.propertyName === 'opacity' && navWomanMenu.style.opacity === '0') {
            navWomanMenu.style.visibility = 'hidden';
        }
    })

    requestAnimationFrame(automaticNewManSlide);
    requestAnimationFrame(automaticNewWomanSlide);


});