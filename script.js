let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }

    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")

}

let sidemeu = document.getElementById("sidemenu");

function openmenu(){
    sidemeu.style.right = "0";  //when the rigth is 0 the bar will be visible
}
function closemenu(){
    sidemeu.style.right = "-200px";
}

const scriptURL =  "https://script.google.com/macros/s/AKfycbxo6c2xTgTHjwHQqibFs-w3ng7LM-4Qp9aVESttLx1ymUDzS3-SCA0W1KVLNhSw9MWeDA/exec"
const form = document.forms['submit-to-google']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, {
        method: 'POST',
        body: new FormData(form)})
        .then(response => {
            msg.innerHTML ="Message sent successfully"
            setTimeout(function(){
                msg.innerHTML = ""
            },5000)
            form.reset()
        })
        .catch(error => console.log('Error!', error.message))
    })

