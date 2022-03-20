document.addEventListener("DOMContentLoaded", (event) => {

    //DATA
    const nom = document.getElementById("nom");
    const prenom = document.getElementById("prenom");
    const email = document.getElementById("email");
    const password1 = document.getElementById("password1");
    const password2 = document.getElementById("password2");
    const emailRegex = new RegExp('/^[a-z0-9._-]+[@]+[a-zA-Z0-9._-]+[.]+[a-z]{2,3}$/');

    //EVENTS
    //surname form validator
    nom.addEventListener('keyup', () => {
        let tempNom = nom.value;
        let warningNom = document.createElement('p');
        let pNom = document.getElementById('warningNom');
        
        if(tempNom.length < 4)
        {
            if (pNom != null){pNom.remove();}

                warningNom.innerHTML = "La taille de votre nom est trop petite";
                warningNom.style.color = "red";
                warningNom.id = "warningNom"
                nom.after(warning);            
        }
        else
        {            
            if (pNom != null){p.remove();}
        }
    })

    //name form validator
    prenom.addEventListener('keyup', () => {
        let tempPrenom = prenom.value;
        let warning = document.createElement('p');
        let pPrenom = document.getElementById('warningPrenom');
        
        if(tempPrenom.length < 4)
        {
            if (pPrenom != null){pPrenom.remove();}

                warning.innerHTML = "La taille de votre prénom est trop petite";
                warning.style.color = "red";
                warning.id = "warningPrenom"
                prenom.after(warning);            
        }
        else
        {            
            if (pPrenom != null){pPrenom.remove();}
        }
    })

    //email form validator
    email.addEventListener('keyup', () => {
        let tempEmail = email.value;
        let warning = document.createElement('p');
        let pEmail = document.getElementById('warningEmail');
        
        if(!tempEmail.match(/^[a-z0-9._-]+[@]+[a-zA-Z0-9._-]+[.]+[a-z]{2,3}$/))
        {
            if (pEmail != null){pEmail.remove();}

            warning.innerHTML = "Wrong email format";
            warning.style.color = "red";
            warning.id = "warningEmail"
            email.after(warning);            
        }
        else
        {            
            if (pEmail != null){pEmail.remove();}
            fetch('traitement.php')
            .then((response) => response.json())
            .then((response) => {
                
                for(let i = 0; i<Object.keys(response).length ;i++)
                {
                    let data = (response[i]);
                    Object.keys(data).forEach(function(key) {
                        console.log('Key : ' + key + ', Value : ' + JSON.stringify(data[key]))
                        if( data[key] == email.value)
                        {
                            warning.innerHTML = "Email already exists!";
                            warning.style.color = "red";
                            warning.id = "warningEmail"
                            email.after(warning);
                        }
                    })
                }
    
            })
            .catch(function(error){
            console.log(error)
        })
        }
    })

    password1.addEventListener('keyup', () => {
        let tempPassword = password1.value;
        let warning = document.createElement('p');
        let pPwd1 = document.getElementById('warningPwd1');
        
        if(!tempPassword.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/))
        {
            if (pPwd1 != null){pPwd1.remove();}

            warning.innerHTML = "Minimum eight characters, at least one letter, one number and one special character";
            warning.style.color = "red";
            warning.id = "warningPwd1"
            password1.after(warning);            
        }
        else
        {            
            if (pPwd1 != null){pPwd1.remove();}
        }
    })


    password2.addEventListener('keyup', () => {
        let tempPassword = password2.value;
        let warning = document.createElement('p');
        let pPwd2 = document.getElementById('warningPwd2');
        
        if(!tempPassword.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/))
        {
            if (pPwd2 != null){pPwd2.remove();}

            warning.innerHTML = "Minimum eight characters, at least one letter, one number and one special character";
            warning.style.color = "red";
            warning.id = "warningPwd2"
            password2.after(warning);            
        }
        else
        {            
            if (pPwd2 != null){pPwd2.remove();}
        }
    })
    
})