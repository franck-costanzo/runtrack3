<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Job 03</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
</head>
<body>
    <header>
        <nav class="purple accent-1 row">
            <ul> 
                <li><a href="index.php">Accueil</a></li>
                <li><a href="index.php">Inscription</a></li>
                <li><a href="index.php">Connexion</a></li>
                <li><a href="index.php">Rechercher</a></li>
            </ul>
        </nav>
    </header>
    <main>
    <section class="container">
        <form action="" method="post" >
            <p>Votre civilité :</p>
            <div class="row">
                <div class="col s2">
                    <label for="civilite1">
                        <input  type="radio" id="civilite1" name="civilite" value="homme" />
                        <span>Homme</span>
                    </label>
                </div>
                <div class="col s2">
                    <label for="civilite2">
                        <input class="col s6"  type="radio" id="civilite2" name="civilite" value="femme" />
                        <span>Femme</span>
                    </label>
                </div>

            </div>

            
                <div class="row">
                    <div class="input-field col m6 s12">
                        <i class="tiny material-icons prefix left pink-text">account_circle</i>
                        <label for="nom">Votre nom:</label>
                        <input class="active" type="text" name="nom" id="nom" class="validate">
                    </div>
                    <div class="input-field  col m6 s12">
                        <i class="material-icons prefix pink-text ">account_circle</i>
                        <label for="prenom">Votre prenom:</label>
                        <input type="text" id="prenom" name="prenom" class="validate">
                    </div>
                </div>
            

            <div class="input-field">
                <i class="tiny material-icons prefix pink-text">business</i>
                <label for="adress">Votre adresse:</label>
                <input type="text" id="adress" name="adresse" class="validate">
            </div>

            <div class="input-field">
                <i class="material-icons prefix pink-text">mail</i>
                <label for="email">Votre email:</label>
                <input type="email" id="email" name="email" class="validate">
            </div>
            <div class="row">
                <div class="input-field col m6 s12">
                    <i class="tiny material-icons prefix pink-text">vpn_key</i>
                    <label for="password">Taper un mot de passe:</label>
                    <input type="password" id="password" name="password" class="validate">
                </div>

                <div class="input-field col m6 s12">
                    <i class="tiny material-icons prefix pink-text">vpn_key</i>
                    <label for="password2">Valider votre mot de passe:</label>
                    <input type="password" id="password2" name="password2" class="validate">
                </div>
            </div>

            <p>Vos passions : </p>
            <div class="row">
                <p class="col s5 offset-s1">
                    <label for="informatique">
                        <i class="tiny material-icons prefix center pink-text ">devices</i>
                        <input type="checkbox" id="informatique" name="passions" value="informatique"  />
                        <span>informatique</span>
                    </label>
                </p>
                <p class="col s5  offset-s1">
                    <label for="voyages">
                        <i class="tiny material-icons prefix center pink-text ">public</i>
                        <input type="checkbox" id="voyages" name="passions" value="voyages"  />
                        <span>voyages</span>
                    </label>
                </p>
            </div>
            <div class="row">
                <p class="col s5 offset-s1">
                    <label for="sport">
                        <i class="tiny material-icons prefix center pink-text ">sports_hockey</i>
                        <input type="checkbox" id="sport" name="passions" value="sport"  />
                        <span>sport</span>
                    </label>
                </p>
                <p class="col s5 offset-s1">
                    <label for="lecture">
                        <i class="tiny material-icons prefix center pink-text ">menu_book</i>
                        <input type="checkbox" id="lecture" name="passions" value="lecture"  />
                        <span>lecture</span>
                    </label>
                </p>
            </div>

            <div class="row">
           <div class="col s6 offset-s5 center-text">
               <button class="btn waves-effect waves-light pink" type="submit" name="action">
                   Envoyer
                   <i class="material-icons right">send</i>
               </button>
           </div>
       </div>
            
        </form>
    
    </section>
    
    </main>

    <footer class="page-footer purple accent-1 text-lighten-4">
          <div class="container">
                <div class="row">
              
                    <div class="col l12  s12">
                        <h5 class="white-text">Links</h5>
                        <ul>
                            <li class="col"><a class="white-text text-lighten-3" href="index.php">Accueil</a></li>
                            <li class="col"><a class="white-text text-lighten-3" href="index.php">Inscription</a></li>
                            <li class="col"><a class="white-text text-lighten-3" href="index.php">Connexion</a></li>
                            <li class="col"><a class="white-text text-lighten-3" href="index.php">Rechercher</a></li>
                        </ul>
                    </div>
                 </div>
          </div>
          
          <div class="footer-copyright">
                <p>© Copyright Céline Emptoz Lacote</p>
          </div>
    </footer>


  
</body>
</html>
