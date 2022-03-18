<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="View/CSS/bootstrap.min.css">
    <script src="script.js"></script>
    <title><?= $title ?></title>
</head>
<body>

    <header>
        <nav class="navbar bg-success rounded-pill m-2">
            <!-- Navbar content -->
            <div class="container-fluid">
                <h1 class="text-light mx-3">Jour 05</h1>
                <nav class="text-dark d-flex">
                    <?php if (isset($_SESSION['connected'])) : ?>
                        <h2 class="text-light"> Bonjour, <?= $_SESSION['prenom'] ?>  <?= $_SESSION['nom'] ?></h2>
                        <form method="POST">
                            <button type="submit" name="deconnexion" class="btn btn-light mx-2 rounded-pill" id="decoBtn">Déconnexion
                            </button>
                        </form>
                    <?php else : ?>                   
                        <a href="inscription.php" class="btn btn-light mx-2 rounded-pill">Inscription</a>
                        <a href="connexion.php" class="btn btn-light mx-2 rounded-pill">Connexion</a>
                    <?php endif ?>
                </nav>
            </div>
        </nav>
    </header>
    
    <?php require_once('View/Error.php')?>
    
    <main class="d-flex justify-content-center my-5">
        <?= $content ?>
    </main>