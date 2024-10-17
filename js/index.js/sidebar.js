document.addEventListener('DOMContentLoaded', function() {
    const firstSideBarList = document.querySelector('.firstSideBarList');
    const manLink = document.querySelector('.firstSideBarList ul li.man');
    const womanLink = document.querySelector('.firstSideBarList ul li.woman');
    const manSideBarList = document.querySelector('.manSideBarList');
    const womanSideBarList = document.querySelector('.womanSideBarList');
    const sidebarCheckbox = document.querySelector('header nav input');
    const firstSideBarLinks = document.querySelectorAll('.firstSideBarList ul li a');
    const manArrow = manLink.querySelector('img');
    const womanArrow = womanLink.querySelector('img');

    function showSecondSidebarList(gender) {
        if(sidebarCheckbox.checked && gender === 'man') {
            manSideBarList.style.transform = 'translateX(100%)';
        }
        if(sidebarCheckbox.checked && gender === 'woman') {
            womanSideBarList.style.transform = 'translateX(100%)';
        }
    };

    function hideSecondSidebarList(gender) {
        if (sidebarCheckbox.checked && gender === 'man') {
            manSideBarList.style.transform = 'translateX(-100%)';
        }else if (sidebarCheckbox.checked && gender === 'woman') {
            womanSideBarList.style.transform = 'translateX(-100%)';
        }else {
            manSideBarList.style.transform = 'translateX(-100%)';
            womanSideBarList.style.transform = 'translateX(-100%)';
        }
    };

    function arrowAnimation(isHover, gender) {
        if (isHover && gender === 'man') {
            manArrow.style.transform = 'rotate(180deg)';
        } else if (isHover && gender === 'woman'){
            womanArrow.style.transform = 'rotate(180deg)';
        } else {
            manArrow.style.transform = 'rotate(0deg)';
            womanArrow.style.transform = 'rotate(0deg)';
        }
    };

    /*Show Second Sidebar*/
    manLink.addEventListener('mouseover', function() {
        showSecondSidebarList('man');
        arrowAnimation(true, 'man');
    });

    manSideBarList.addEventListener('mouseover', function() {
        showSecondSidebarList('man');
    });

    womanLink.addEventListener('mouseover', function() {
        showSecondSidebarList('woman');
        arrowAnimation(true, 'woman');
    });

    womanSideBarList.addEventListener('mouseover', function() {
        showSecondSidebarList('woman');
    });

    /*Hide Second Sidebar*/
    manSideBarList.addEventListener('mouseout', function(e) {
        if(e.relatedTarget && !manLink.contains(e.relatedTarget) && !manSideBarList.contains(e.relatedTarget)) {
            hideSecondSidebarList('man');
            arrowAnimation(false, 'man');
        }
    });

    womanSideBarList.addEventListener('mouseout', function(e) {
        if(e.relatedTarget && !womanLink.contains(e.relatedTarget) && !womanSideBarList.contains(e.relatedTarget)) {
            hideSecondSidebarList('woman');
            arrowAnimation(false, 'woman');
        }
    });

    firstSideBarLinks.forEach(link => {
        if (link !== manLink) {
            link.addEventListener('mouseover', function() {
                hideSecondSidebarList('man');
                arrowAnimation(false, 'man');
            });
        }
        
        if (link !== womanLink) {
            link.addEventListener('mouseover', function() {
                hideSecondSidebarList('woman');
                arrowAnimation(false, 'woman');
            });
        }
    });

    /*Ensure that the second sidebar list will be close together with the firstSideBarList when user click the cross*/
    sidebarCheckbox.addEventListener('change', function() {
        if(!this.checked) {
            hideSecondSidebarList('');
            arrowAnimation(false, '');
        }
    });
});