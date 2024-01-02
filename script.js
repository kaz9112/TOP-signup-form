let newPassword = document.querySelector('#password')
let confirmedPassword = document.querySelector('#confirmed-password')

confirmedPassword.addEventListener('input', function() {
    let newPasswordValue = newPassword.value
    let confirmedPasswordValue = confirmedPassword.value

    if (confirmedPasswordValue == newPasswordValue) {
        newPassword.style.borderColor = 'rgb(70, 187, 70)'
        confirmedPassword.style.borderColor = 'rgb(70, 187, 70)'

    } else if (confirmedPasswordValue != newPasswordValue) {
        newPassword.style.borderColor = 'red'
        confirmedPassword.style.borderColor = 'red'
    }
})