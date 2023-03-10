const password = document.getElementById('pwd');
const passwordConfirm = document.getElementById('pwd2');
const submitbutton = document.getElementById('btn');

submitbutton.addEventListener('click', ()=> {
    let value = password.value;
    let value2 = passwordConfirm.value;

    if (value !== value2) {
        console.log('Password does not match.')
    } else {
        console.log('Password created')
    }

})