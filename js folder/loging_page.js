document.getElementById('btn_submit').addEventListener('click', function(){
    const emailField = document.getElementById('user_email');
    const email = emailField.value;

    const passwordField = document.getElementById('user_password');
    const password = passwordField.value;

    if(email == 'irfannabil75@gmail.com' && password == 'nabil@0140'){
        window.location.href = 'bank_inside.html'
    }
    else{
        alert('Invalid User')
    }
})