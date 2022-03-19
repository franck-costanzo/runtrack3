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
        let warning = document.createElement('p');
        let p = document.getElementById('warningNom');
        
        if(tempNom.length < 4)
        {
            if (p != null){p.remove();}

                warning.innerHTML = "La taille de votre nom est trop petite";
                warning.style.color = "red";
                warning.id = "warningNom"
                nom.after(warning);            
        }
        else
        {            
            if (p != null){p.remove();}
        }
    })

    //name form validator
    prenom.addEventListener('keyup', () => {
        let tempPrenom = prenom.value;
        let warning = document.createElement('p');
        let p = document.getElementById('warningPrenom');
        
        if(tempPrenom.length < 4)
        {
            if (p != null){p.remove();}

                warning.innerHTML = "La taille de votre prénom est trop petite";
                warning.style.color = "red";
                warning.id = "warningPrenom"
                prenom.after(warning);            
        }
        else
        {            
            if (p != null){p.remove();}
        }
    })

    //email form validator
    email.addEventListener('keyup', () => {
        let tempEmail = email.value;
        let warning = document.createElement('p');
        let p = document.getElementById('warningEmail');
        
        if(!tempEmail.match(/^[a-z0-9._-]+[@]+[a-zA-Z0-9._-]+[.]+[a-z]{2,3}$/))
        {
            if (p != null){p.remove();}

            warning.innerHTML = "Wrong email format";
            warning.style.color = "red";
            warning.id = "warningEmail"
            email.after(warning);            
        }
        else
        {            
            if (p != null){p.remove();}
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
        let p = document.getElementById('warningPwd1');
        
        if(!tempPassword.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/))
        {
            if (p != null){p.remove();}

            warning.innerHTML = "Minimum eight characters, at least one letter, one number and one special character";
            warning.style.color = "red";
            warning.id = "warningPwd1"
            password1.after(warning);            
        }
        else
        {            
            if (p != null){p.remove();}
        }
    })


    password2.addEventListener('keyup', () => {
        let tempPassword = password2.value;
        let warning = document.createElement('p');
        let p = document.getElementById('warningPwd2');
        
        if(!tempPassword.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/))
        {
            if (p != null){p.remove();}

            warning.innerHTML = "Minimum eight characters, at least one letter, one number and one special character";
            warning.style.color = "red";
            warning.id = "warningPwd2"
            password2.after(warning);            
        }
        else
        {            
            if (p != null){p.remove();}
        }
    })
})