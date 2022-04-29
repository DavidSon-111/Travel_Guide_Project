document.getElementById('registration').addEventListener('submit', function(event){
    event.preventDefault();

    let errors = {};

    let form = event.target;

    let name = form.querySelector('[name = "Name"]').value;

    if (name.length < 4){
        errors.name = 'Min 4 letters!';
    }

    let email = form.querySelector('[name = "email"]').value;
    let char = '.';

    if (!email.match(char)){
        errors.email = 'Invalid Email';
    }

    let password = form.querySelector('[name = "password"]').value;
    let password2 = form.querySelector('[name = "password2"]').value;

    if (password.length < 8){
        errors.password = 'Password is not strong enough!';
    }

    if (password != password2){
        errors.password = 'Passwords don\'t match';
    }

    let agree = form.querySelector('[name = "agree"]').checked;

    if (!agree){
        errors.agree = 'You must agree terms and conditions';
    }

    let gender = false;

    form.querySelectorAll('[name = "gender"]').forEach(item => {
        if (item.checked){
            gender = true;
        }
        if (!gender){
            errors.gender = 'Please select your gender'
        }
    })

    form.querySelectorAll('.error-text').forEach(item => {
        item.textContent = '';
    })

    for (let name in errors){
        let errorPlaceholder = document.getElementById('error_' + name);

        if (errorPlaceholder){
            errorPlaceholder.textContent = errors[name];
        }
    }

    if (Object.keys(errors).length === 0){
        // document.getElementById('home').textContent = name;
        location.replace("index.html")
    }
    console.log(errors);
});

document.getElementById('link').addEventListener('click', function(){
    document.getElementById('registration').style.display = 'none';
    document.getElementById('login').style.display = 'block'
});
document.getElementById('link1').addEventListener('click', function(){
    document.getElementById('registration').style.display = 'block';
    document.getElementById('login').style.display = 'none'
});

document.getElementById('login').addEventListener('submit', function(event){
    event.preventDefault();
    location.replace("index.html")
});