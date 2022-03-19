<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Job 03</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
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
    <section>
        <form action="" method="post">
            <p>Votre civilité :</p>
            <label for="civilite">Homme</label>
            <input type="radio" id="civilite" name="civilite" value="homme" >

            <label for="civilite">Femme</label>
            <input type="radio" id="civilite" name="civilite" value="femme">

            <label for="nom">Votre nom:</label>
            <input type="text" name="nom" id="nom">

            <label for="prenom">Votre prenom:</label>
            <input type="text" id="prenom" name="prenom">

            <label for="adress">Votre adresse:</label>
            <input type="text" id="adress" name="adresse">

            <label for="email">Votre email:</label>
            <input type="email" id="email" name="email">

            <label for="password">Taper un mot de passe:</label>
            <input type="password" id="password" name="password">

            <label for="password2">Valider votre mot de passe:</label>
            <input type="password" id="password2" name="password2">

            <p>Vos passions : </p>
            <label for="informatique">Informatique</label>
            <input type="checkbox" id="informatique" name="passions" value="informatique" >

            <label for="voyages">voyages</label>
            <input type="checkbox" id="voyages" name="passions" value="voyages" >

            <label for="sport">sport</label>
            <input type="checkbox" id="sport" name="passions" value="sport" >

            <label for="lecture">lecture</label>
            <input type="checkbox" id="lecture" name="passions" value="lecture" >

            <input type="submit" name="valider">
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
                © Copyright Céline Emptoz Lacote
          </div>
    </footer>
    


    
</body>
</html>