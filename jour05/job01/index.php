<?php $title = "Accueil" ?>
<?php session_start(); ?>
<?php include_once("Controller/user_controller.php") ?>
<?php ob_start()?>

<h1><?= (isset($_SESSION['connected']) ? "Bonjour ".$_SESSION['prenom']." ".$_SESSION['nom'] : "Vous n'êtes pas connecté !") ?></h1>
<?php $content = ob_get_clean(); ?>

<?php require_once('View/patron.php'); ?>