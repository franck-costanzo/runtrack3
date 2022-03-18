<?php

require_once 'Model/Model.php';

Class User extends Model
{
    

    public static function subscribeUser($prenom, $nom, $email, $password)
    {
        $sql = "INSERT INTO utilisateurs (prenom, nom, email, password) 
                        VALUES (?, ?, ?, ?)";
        $params = array($prenom, $nom, $email, $password);
        self::selectQuery($sql, $params);
    }

    public static function chkExists($email)
    {
        $params = array($email);

        $sql = "SELECT * FROM `utilisateurs` 
                        WHERE `email` LIKE ?";

        $checkQuery = self::selectQuery($sql,$params);
                
        $infos = $checkQuery->fetch(PDO::FETCH_ASSOC);

        $count = $checkQuery->rowCount();

        if ($count > 0)
        {
            return $infos;
        }
        else
        {
            return false;
        }
        
    }

    public static function getEmails(){
        $sql = "SELECT email FROM utilisateurs";

        $emailQuery = self::selectQuery($sql);
        $infos = $emailQuery->fetchAll(PDO::FETCH_ASSOC);
        return $infos;
    }



}

    