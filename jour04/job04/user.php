<?php

    try {
        $pdo = new PDO('mysql:host=localhost;dbname=utilisateurs;charset=utf8','root', '');
    
    } catch (PDOException $e) {
        print "Erreur !: " . $e->getMessage() . "<br/>";
        die();
    }

    //REQUETE RECUPERATION UTILISATEURS
    $requete = $pdo->prepare("SELECT * FROM utilisateurs");
    $requete->execute();
    $users = $requete->fetchAll(PDO::FETCH_ASSOC);
    
    //TRANFORMATION DES INFOS EN TABLEAU JSON
    $tableau_json = json_encode($users);


    echo $tableau_json;