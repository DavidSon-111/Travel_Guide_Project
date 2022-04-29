// Burger bar
let navbarLinks = document.getElementById('links');
let toggleButton = document.getElementById('toggleButton');

toggleButton.addEventListener('click', function(){
    navbarLinks.classList.toggle('active')
})


// Taking data with api(using reqres.in for staff data)
function getUsers(page) {
    function render() {
        let response = this.responseText;
        let responseData = JSON.parse(response);

        var fragment = document.createDocumentFragment();
        var employee_numb = 1;
        responseData.data.forEach(item => {
            let figure = document.createElement('figure');
            figure.setAttribute('class', 'tour-item');

            let p = document.createElement('p');
            p.textContent = item.first_name + ' ' + item.last_name;

            let mail = document.createElement('a');
            mail.setAttribute('href', '');
            mail.style.color = '#00ff6c';
            mail.textContent = item.email;

            let img = document.createElement('img');
            img.src = 'img/employee-' + employee_numb + '.jpg';
            img.setAttribute('class', 'tour-img');
            employee_numb+=1;

            let figCaption = document.createElement('figcaption')
            figCaption.setAttribute('class', 'tour-desc')

            figCaption.appendChild(p);
            figCaption.appendChild(mail);
            figure.appendChild(img);
            figure.appendChild(figCaption);

            document.getElementById('tours').appendChild(figure);
        });
       
        // document.getElementById('list').innerHTML = ' ';
        // document.getElementById('list').innerHTML = 'li';
        //document.getElementById('staff').appendChild(fragment);
    }


    let requist = new XMLHttpRequest();
    requist.addEventListener('load',render);
    requist.open('GET', 'https://reqres.in/api/users?page=' + page);
    requist.send();
}

getUsers(2);