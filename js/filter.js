document.addEventListener('DOMContentLoaded', function () {
    const filter = document.querySelector('.filter');
    const size = filter.querySelector('.sizes');
    const sizeSelection = size.querySelectorAll('input');
    const sizeLabel = size.querySelector('label');
    const price = filter.querySelector('.price');
    const rangeContainer = price.querySelector('.rangeContainer');
    const priceLabel = price.querySelector('label');

    function closeSize() {
        size.style.marginLeft = '';
        size.style.width = '';
        sizeSelection.forEach(input => {
            input.style.position = '';
            input.style.opacity = '';
        })
    }

    function closePrice() {
        price.style.marginLeft = '';
        rangeContainer.style.visibility = '';
        rangeContainer.style.opacity = '';
        price.style.width = '';
        priceLabel.style.paddingRight = '';
        priceLabel.style.marginLeft = ''
    }

    size.addEventListener('click', function () {
        if (price.style.width === '17%')
            closePrice();
        size.style.marginLeft = '-2.5%';
        size.style.width = '10%';
        sizeSelection.forEach(input => {
            input.style.position = 'relative';
            input.style.opacity = '1';
        })
    })

    price.addEventListener('click', function () {
        if (size.style.width === '10%')
            closeSize();
        price.style.marginLeft = '-6.5%';
        rangeContainer.style.visibility = 'visible';
        rangeContainer.style.opacity = '1';
        price.style.width = '17%';
        priceLabel.style.paddingRight = '3%';
        priceLabel.style.marginLeft = '-20%'
    })

    filter.addEventListener('mouseleave', function () {
        closePrice();
        closeSize();
    })

    //Price Range
    const rangeInput = document.querySelectorAll('.range-input input'),
        leftValue = document.querySelector('.rangeContainer .value.left'),
        rightValue = document.querySelector('.rangeContainer .value.right'),
        progress = document.querySelector('.slider .progress');

    let priceGap = 100;

    rangeInput.forEach(input => {
        input.addEventListener("input", e => {
            let minVal = rangeInput[0].value,
                maxVal = rangeInput[1].value;

            if (maxVal - minVal < priceGap) {
                if (e.target.className === 'range-min') {
                    rangeInput[0].value = maxVal - priceGap;
                } else {
                    rangeInput[1].value = minVal + priceGap;
                }

            } else {
                leftValue.textContent = minVal;
                rightValue.textContent = maxVal;
                progress.style.left = (minVal / rangeInput[0].max) * 100 + "%";
                progress.style.right = 100 - (maxVal / rangeInput[0].max) * 100 + "%";
            }
        });
    });
})