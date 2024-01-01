let newPassword = document.querySelector('#password')
let confirmedPassword = document.querySelector('#confirmed-password')

confirmedPassword.addEventListener('input', function() {
    let newPasswordValue = newPassword.value
    let confirmedPasswordValue = confirmedPassword.value

    if (confirmedPasswordValue == newPasswordValue) {
        console.log('great')
    } else if (confirmedPasswordValue != newPasswordValue) {
        console.log('fuck')
    }
})