const form = document.getElementById('form')
const fullName = document.getElementById('fullName')
const email = document.getElementById('email')
const phone = document.getElementById('phone')

//Function Validation
form.addEventListener('click', (e) => {
    e.preventDefault()
    checkInputs()
})

//Function for Input Validation
function checkInputs(){
    const fullNameValue = fullName.value.trim()
    const emailValue = email.value.trim()
    const phoneValue = phone.value.trim()

    if(fullNameValue === ''){
        setErrorFor(fullName)
    }else{
        setSuccessFor(fullName)
    }

    if(emailValue === ''){
        setErrorFor(email)
    }else if(!isEmail(email)){
        setErrorFor(email)
    }
    else{
        setSuccessFor(email)
    }
    function isEmail(email){
        return (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))
    }


    if(phoneValue === '' || phoneValue.length < 10 || isNaN(phoneValue)){
        setErrorFor(phone)
    }else{
        setSuccessFor(phone)
    }
}

function setErrorFor(input){
    const formGroup = input.parentElement
    formGroup.className = 'form-group error'
}

function setSuccessFor(input){
    const formGroup = input.parentElement
    formGroup.className = 'form-group success'
}


//Function for Navigation Display
    const navCheckBox = document.querySelector('#navigation-toggle')
    const navBackground = document.querySelector('#navigation-background')
    const navigationNav = document.querySelector('#navigation-nav')
    const navigationLinks = document.querySelectorAll('#nav-link')
  
    function navigationDisplay(e){
        navCheckBox.addEventListener('change', () => {
            if(navCheckBox.checked){
                navBackground.style.transform = 'scale(850)'
                navigationNav.style.opacity = '1'
                navigationNav.style.width = '100%'
            }else if(!navCheckBox.checked){
                navBackground.style.transform = 'scale(0)'
                navigationNav.style.opacity = '0'
                navigationNav.style.width = '0'
            }
        })
    }

    navigationDisplay()

//Function to Hide Navigation 
    function hideNavigation(){
        navigationLinks.forEach(a => {
            a.addEventListener('click', () => {
                if(mediaQuary.matches){
                    navBackground.style.transform = 'scale(0)'
                    navigationNav.style.opacity = '0'
                    navigationNav.style.width = '0'
                    navCheckBox.checked = false
                }            
            })
        })
    }
    var mediaQuary = window.matchMedia("(max-width: 979px)")
    hideNavigation()
    
//Goto Top Arrow Button

const toTop = document.querySelector('.gotopbtn')

window.addEventListener('scroll', () => {
    if(window.pageYOffset > 100 && mediaQuary.matches){
        toTop.classList.add('active')
    }else{
        toTop.classList.remove('active')
    }
})
var mediaQuary = window.matchMedia("(max-width: 979px)")

new WOW().init();