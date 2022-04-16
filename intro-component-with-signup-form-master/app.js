const form = document.getElementById("form");

form.addEventListener('submit', e => {
    e.preventDefault()

    const firstName = form['firstname'].value;
    const lastName = form['lastname'].value;
    const email = form['email'].value;
    const password = form['password'].value;

    if (firstName === '') {
        addErrorTo('firstname', 'First Name is required');
    } else {
        removeError('firstname');
    };

    if (lastName === '') {
        addErrorTo('lastname', 'Last Name is required');
    } else {
        removeError('lastname');
    };

    if (email === '') {
        addErrorTo('email', 'Email is required');
    } else if (!isValid(email)) {
        addErrorTo('email', 'Email is not valid');
    } else {
        removeError('email');
    };

    if (password === '') {
        addErrorTo('password', 'Password is required');
    } else {
        removeError('password');
    };

});

const addErrorTo = (field, message) => {
    const formControl = form[field].parentNode;
    formControl.classList.add('error');

    const small = formControl.querySelector('small');
    small.innerText = message;
    small.style.opacity = '1';
};

const removeError = (field) => {
    const formControl = form[field].parentNode;
    formControl.classList.remove('error');

    const small = formControl.querySelector('small');
    small.style.opacity = '0';
};

const isValid = (email) => {
    const res = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return res.test(String(email).toLowerCase());
};