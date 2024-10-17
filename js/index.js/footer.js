document.addEventListener('DOMContentLoaded', function () {
    const joinUs = document.querySelector('.joinUs');
    const joinOurNewsletterSubmit = joinUs.querySelector('.joinOurNewsletterSubmit');
    const joinOurNewsletterEmailInput = document.getElementById('joinOurNewsletterEmail');
    const checkboxMan = document.getElementById('checkboxMan');
    const checkboxWoman = document.getElementById('checkboxWoman');
    const genderSelectionErrorMessage = document.getElementById('genderSelectionErrorMessage');
    const emailErrorMessage = joinUs.querySelector('.emailErrorMessage');
    const emailEmptyErrorMessage = joinUs.querySelector('.emailEmptyErrorMessage');
    const successfullMessage = document.querySelector('successfullMessage');

    joinOurNewsletterSubmit.addEventListener('click', function (e) {

        let valid = true;

        //email checking
        if (joinOurNewsletterEmailInput.value.trim() === '') {
            emailEmptyErrorMessage.style.display = 'block';
            emailErrorMessage.style.display = 'none';
            joinOurNewsletterEmailInput.style.borderBottomColor = 'red';
            valid = false;
        } else {
            emailEmptyErrorMessage.style.display = 'none';
            const emailPattern = new RegExp(joinOurNewsletterEmailInput.pattern);
            if (!emailPattern.test(joinOurNewsletterEmailInput.value)) {
                emailErrorMessage.style.display = 'block';
                joinOurNewsletterEmailInput.style.borderBottomColor = 'red';
                valid = false;
            } else {
                emailErrorMessage.style.display = 'none';
                joinOurNewsletterEmailInput.style.borderBottomColor = 'rgb(141, 140, 140)';
            }
        }

        //gender selection checking
        if (!checkboxMan.checked && !checkboxWoman.checked) {
            genderSelectionErrorMessage.style.display = 'block';
            valid = false;
        } else {
            genderSelectionErrorMessage.style.display = 'none';
        }

        //successful checking
        if (!valid) {
            e.preventDefault();
        } else {
            successfullMessage.style.display = 'block';
            setTimeout(() => {
                successfullMessage.style.display = 'none';
            }, 1800);
        }
    });
});