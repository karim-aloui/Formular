
const form = document.getElementById('form');
const land = document.getElementById('land');
const interesse = document.getElementById('interesse');
const anrede = document.getElementById('anrede');
const vorname = document.getElementById('vorname');
const nachname = document.getElementById('nachname');
const email = document.getElementById('email');

form.addEventListener('submit', (e) => {
   e.preventDefault();

   checkInput();
});

function checkInput() {
    // Holen Sie sich die Werte von Input
    const landValue = land.value.trim();
    const interesseValue = interesse.value.trim();
     const anredeValue = anrede.value.trim();
     const vornameValue = vorname.value.trim();
     const nachnameValue = nachname.value.trim();
     const emailValue = email.value.trim();

     if(landValue === '') {
        // error anzeigein
        // error class hinzufügen
        setErrorFor(land, 'Wählen Sie die Land ');
    } else {
        // success class hinzufügen
        setSuccessFor(land);
    }

     if(interesseValue === '') {
        setErrorFor(interesse, 'Wählen Sie Ihre Interesse ');
    } else {

        setSuccessFor(interesse);
    }

     if(anredeValue === '') {
        setErrorFor(anrede, 'Wählen Sie die Anrede ');
    } else {
        setSuccessFor(anrede);
    }

     if(vornameValue === '') {
         setErrorFor(vorname, 'Der Vorname darf nicht leer sein ');
     } else {
         setSuccessFor(vorname);
     }
     if(nachnameValue === '') {        
        setErrorFor(nachname, 'Der Nachname darf nicht leer sein ');
    } else {
        setSuccessFor(nachname);
    }
    if(emailValue === '') {
        setErrorFor(email, 'Die Email darf nicht leer sein');
    } else if(!isEmail(emailValue)) {
        setErrorFor(email, 'E-Mail muss eine gültige E-Mail sein');
    } else {
        setSuccessFor(email);
    }
}

function setErrorFor(input, message){
    const inputField = input.parentElement; // .input-field
    const small = inputField.querySelector('small');

    // add error message inside small
    small.innerText = message;

    // add error class
    inputField.className = 'input-field error';
}

function setSuccessFor(input) {
    const inputField = input.parentElement;
    inputField.className = 'input-field success';

}


function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}