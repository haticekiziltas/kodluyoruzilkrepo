/*Genel Plan:
Form seçimi
Input Bilgisini UL içerisine ekle
Form içindeki bilgiyi sıfırla
Eğer forma bilgi girilmez ise kullanıcıyı uyar*/

let userFormDOM  = document.querySelector('#userForm')
userFormDOM.addEventListener('submit',formHandler)
const alertDOM = document.querySelector('#alert')

const alertFunction = (title,message,className="warning") => `<div class="alert alert-${className} alert-dismissible fade show" role="alert">
<strong>${title}</strong> ${message}
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`

function formHandler(event) {
    event.preventDefault()
    const USER_NAME = document.querySelector('#userName')
    const SCORE = document.querySelector('#score')

    if(userName.value && score.value){
        addItem(USER_NAME.value, score.value)
        USER_NAME.value="" 
        SCORE.value=""

    }else {
        // console.log("hatalı giriş")
        alertDOM.innerHTML = alertFunction(
        "Başlık bilgisi",
        "Eksik bilgi girdiniz",
        "danger")
    }
   
}

let userListDOM = document.querySelector('#userList')

const addItem =(userName, score) =>{
 let liDOM = document.createElement('li')
 liDOM.innerHTML = ` ${userName} <span class="badge bg-primary rounded-pill">${score}</span>`
 liDOM.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center')
 userListDOM.append(liDOM)
}
