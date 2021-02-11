// DOM ELEMENTS

const form = document.getElementById('form')
const fullName = document.getElementById('fullName')
const email = document.getElementById('email')
const phone = document.getElementById('phone')
const message = document.getElementById('message')

document.addEventListener('submit', (e) => {
    e.preventDefault()

    checkInputs()
})

function checkInputs(){
    //Get inputs value
    let fullNameValue = fullName.value.trim()
    let emailValue = email.value.trim()
    let phoneValue = phone.value.trim()
    let messageValue = message.value.trim()

    if(nameValue === ''){
        //Show error
        //Add error class
        setErrorFor(fullName, 'Please fill in your name')
    }else{
        //Add success class
        setSuccessFor(fullName)
    }
}

function setErrorFor(input, message){
    const formGroup = input.parentElement //form-group
    const errorMessage = formGroup.getElementById('errorMessage')

    //Add error message
    errorMessage.innerText = message
    //Add error class
    formGroup.className = 'form-group error'
}