<?php $title = "Log In" ?>
<?php session_start(); ?>
<?php require_once('Model/User.php'); ?>
<?php require_once('Controller/user_controller.php'); ?>

<?php   ob_start();  ?>
<div class="container-md rounded-2 shadow-sm border 
                    border-light w-50 p-3">

    <form action="" method="POST">

        <!-- Email -->
        <div class="row">
            <div class="form-group" >
                <label for="email">Email</label>
                <input type="text" class="form-control p-1 px-2 rounded-1" id="email" name="email">
            </div>
        </div>


        <!-- Password -->
        <div class="row">
            <div class="form-group">
                <label for="password">Mot de passe</label>
                <input type="password" class="form-control p-1 px-2 rounded-1" id="password" name="password">
            </div>
        </div>
        
        <!-- Submit -->
        <div class="d-flex justify-content-center align-items-center">
            <button type="submit" class="btn btn-dark rounded-2 mb-4 mt-4 p-2 shadow-sm" name="submit_connection">Se connecter</button>
        </div>

    </form>

</div>
<?php  $content=ob_get_clean(); ?>

<?php require ('View/patron.php'); ?>