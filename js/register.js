document.addEventListener('DOMContentLoaded', function () {
    const signUp = document.querySelector('.signUp');
    const signUpSubmit = signUp.querySelector('.signUpSubmit');
    const signUpEmailInput = document.getElementById('signUpEmail');
    const emailErrorMessage = signUp.querySelector('.emailErrorMessage');
    const emailEmptyErrorMessage = signUp.querySelector('.emailEmptyErrorMessage');
    const signUpPasswordInput = document.getElementById('signUpPassword');
    const passwordFormatErrorMessage = signUp.querySelector('.passwordFormatErrorMessage');
    const passwordEmptyErrorMessage = signUp.querySelector('.passwordEmptyErrorMessage');
    const acceptPrivacyPolicy = document.getElementById('acceptPrivacyPolicy');
    const policyErrorMessage = signUp.querySelector('.policyErrorMessage');

    signUpSubmit.addEventListener('click', function (e) {
 
        let valid = true;
        
        //email checking
        if (signUpEmailInput.value.trim() === '') {
            emailEmptyErrorMessage.style.display = 'block';
            emailErrorMessage.style.display = 'none';
            signUpEmailInput.style.borderBottomColor = 'red';
            valid = false;
        } else {
            emailEmptyErrorMessage.style.display = 'none';
            const emailPattern = new RegExp(signUpEmailInput.pattern);
            if (!emailPattern.test(signUpEmailInput.value)) {
                emailErrorMessage.style.display = 'block';
                signUpEmailInput.style.borderBottomColor = 'red';
                valid = false;
            } else {
                emailErrorMessage.style.display = 'none';
                signUpEmailInput.style.borderBottomColor = 'rgb(141, 140, 140)';
            }
        }

        //password checking
        if (signUpPasswordInput.value.trim() === '') {
            passwordEmptyErrorMessage.style.display = 'block';
            passwordFormatErrorMessage.style.display = 'none';
            signUpPasswordInput.style.borderBottomColor = 'red';
            valid = false;
        } else {
            passwordEmptyErrorMessage.style.display = 'none';
            const passwordPattern = new RegExp(signUpPasswordInput.pattern);
            if(!passwordPattern.test(signUpPasswordInput.value)) {
                passwordFormatErrorMessage.style.display = 'block';
                signUpPasswordInput.style.borderBottomColor = 'red';
                valid = false;
            } else {
                passwordFormatErrorMessage.style.display = 'none';
                signUpPasswordInput.style.borderBottomColor = 'rgb(141, 140, 140)';
            }
        }

        //privacy policy checking
        if(!acceptPrivacyPolicy.checked) {
            policyErrorMessage.style.display = 'block';
            valid = false;
        } else {
            policyErrorMessage.style.display = 'none';
        }

        //successful checking
        if (!valid) {
            e.preventDefault();
        } else {
            setTimeout(() => {
                window.location.replace('logInSuccessful.html');
            }, 1500);
        }
    });
})