

document.addEventListener('DOMContentLoaded', function () {

    var addFavorite = document.getElementsByClassName('star');
    console.log(addFavorite);

    //Change fav color
    var starIn = addFavorite.querySelector('.starIn');
    console.log(starIn.style.backgroundColor)
    star.addEventListener('click', function () {
        if (starIn.style.backgroundColor === 'white') {
            starIn.style.backgroundColor = 'black';
        } else {
            starIn.style.backgroundColor = 'white';
        }
    })

    if (document.readyState == 'loading') {
        document.addEventListener('DOMContentLoaded', ready)
    } else {
        ready();
    }
})

function ready() {
    for (var i = 0; i < addFavorite.length; i++) {
        var button = addFavorite[i];
        button.addEventListener('click', addToFavCartClicked);
    }
}

function addToFavCartClicked(e) {
    var button = e.target;
    var favItem = button.closest('.product');
    var productName = favItem.getElementsByClassName('productName')[0].innerText;
    var productPrice = favItem.getElementsByClassName('productPrice')[0].innerText;
    var productImg = favItem.getElementsByClassName('productImg')[0].src;

    console.log(productName, productPrice, productImg);
    addProductToFavCart(productName, productPrice, productImg);
}

function addProductToFavCart(productName, productPrice, productImg) {
    var favCartRow = document.createElement('div');
    favCartRow.innerText = productName;
    var favCartItems = document.getElementsByClassName('.product')[0];
    favCartItems.append(favCartRow);
}
/*
for (var i = 0; i < addFavorite.length; i++) {
    var favButton = addFavorite[i];
    favButton.addEventListener('click', function (e) {
        var favButtonClicked = e.target;
        updateCartTotal();
    })
}

function updateCartTotal() {
    var cartItemConatiner = document.getElementsByClassName('productContainer')[0];
    var cartRows = cartItemConatiner.getElementsByClassName('row');
    for (var i = 0; i < cartRows.length; i++) {
        var cartRows = cartRows[i];
    }

}
*/
