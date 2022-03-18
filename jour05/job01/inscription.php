<?php $title = "Register" ?>
<?php session_start(); ?>
<?php require_once('Model/User.php'); ?>
<?php require_once('Controller/user_controller.php');?>


<?php   ob_start();  ?>
        
<div class="container-md rounded-2 shadow-sm border 
            border-light p-3" >

    <form action="inscription.php"  method="POST">

        <!-- Prenom nom -->
        <div class="row">
            <div class="form-group col-6">
                <label for="prenom">Prénom</label>
                <input type="text" class="form-control rounded-0" id="prenom" name="prenom">
            </div>
            <div class="form-group col-6">
                <label for="nom">Nom</label>
                <input type="text" class="form-control rounded-0" id="nom" name="nom">
            </div>
        </div>

        <!-- Email -->
        <div class="row" >
            <div class="form-group col-12">
                <label for="email">Email</label>
                <input type="text" class="form-control rounded-0" id="email" name="email">
            </div>                    
        </div>

        <!-- Password -->
        <div class="row" >
            <div class="form-group col-6">
                <label for="password1">Password</label>
                <input type="password" class="form-control rounded-0" id="password1" name="password_1">
            </div>
            <div class="form-group col-6">
                <label for="password2">Password Confirmation</label>
                <input type="password" class="form-control rounded-0" id="password2" name="password_2">
            </div>
        </div>

        <!-- Submit -->
        <div class="d-flex justify-content-center align-items-center" >                
            <button type="submit" class="btn btn-success rounded-2 mb-4 mt-4 p-2 shadow-sm" name="submit_subscription">S'inscrire</button>
        </div>

    </form>

</div>

<?php  $content=ob_get_clean(); ?>

<?php require ('View/patron.php'); ?>