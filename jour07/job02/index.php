<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Job 01</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <script src="script.js"></script>
    <link rel="stylesheet" href="style.css">
    
</head>
<body>
    <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a href="#" class="navbar-brand">LPTF</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">

                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a href="https://laplateforme.io/" class="nav-link">Accueil</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">Units</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">Jobs</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link disabled">skills</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
    <main>
        <h1 class="display-4 m-3 text-center">LaPlateforme_</h1>
        <div class="container-fluid">
            <div class="row align-items-start justify-content-around ">
                <div class="card" style="width: 16rem;">
                    <img src="images.jpg" class="card-img-top" alt="Photo de papillon">
                    <div class="card-body">
                        <h5 class="card-title">Un papillon</h5>
                        <p class="card-text">Un papillon c'est comme une chenille, mais avec des ailes. Ne pas ingerer.</p>
                        
                        <button type="button" class="btn btn-primary mt-3" data-toggle="modal" data-target="#modal">Commander votre propre papillon</button>
                    </div>
                </div>

                
                

                <div class="jumbotron col-lg-7 .col-md-7 col-sm-12 col-12 ">
                    <h2 id="titre_jumbo" class="display-4">Bonjour, monde!</h2>
                    <p class="lead" id="p_jumbo">Il existe plusieurs visions du terme: </br>
                    le monde est la matière, l'espace et les phénomènes qui nous sont accessibles par les sens, l'exérience ou la raison.</br>
                    Le sens le plus corant désigne notre planéte, la Terre, avec ses habitants, et son environnement plus ou moins naturel.</p>
                    <hr class="my-4">
                    <p>Le sens étendu désigne l'univers dans son ensemble.</p>
                    
                    <button class="btn btn-danger btn-lg"  role="button" id="bouton">Rebooter le monde</button>
                    <div id="spinner" class="spinner-border text-info" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                    <nav aria-label="Page navigation ">
                        <ul class="pagination justify-content-end" >
                            <li class="page-item">
                                <a class="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                                </a>
                            </li>
                            <li class="page-item"><boutton id="page1" class="page-link" href="#">1</boutton></li>
                            <li class="page-item"><button id="page2" class="page-link" href="#">2</button></li>
                            <li class="page-item"><button id="page3" class="page-link" href="#">3</button></li>
                            <li class="page-item">
                                <a class="page-link" href="#" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                    
                </div>

                <div id="list" class="list-group  col-lg-2 .col-md-2 col-sm-5 col-5">
                    <a href="#" class="list-group-item list-group-item-action active">Limbe</a>
                    <a href="#" class="list-group-item list-group-item-action">Luxure</a>
                    <a href="#" class="list-group-item list-group-item-action">Gourmandise</a>
                    <a href="#" class="list-group-item list-group-item-action">Avarice</a>
                    <a href="#" class="list-group-item list-group-item-action">Colére</a>
                    <a href="#" class="list-group-item list-group-item-action">Heresie</a>
                    <a href="#" class="list-group-item list-group-item-action">Violence</a>
                    <a href="#" class="list-group-item list-group-item-action">Ruse et tromperie</a>
                    <a href="#" class="list-group-item list-group-item-action">Trahison</a>
                    <a href="#" class="list-group-item list-group-item-action">Internet explorer</a>

                    
                </div>

              
            </div>
            <div class="modal fade" id="modal" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Confimation de commande</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">x</span></button>
                        </div>
                    <div class="modal-body">
                        <p>Merci de votre commande</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>
                </div>
            </div>
            

          
        </div>
        

        </div>
        <section class="container">
            <p class="text-right font-weight-bold m-auto w-50">Installation de AI 9000</p>
            <div class="d-flex flex-row justify-content-center" >
                <svg id="moins" width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-bar-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5zM10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5z"/>
                    </svg>
                <div class="progress w-50">
                    <div id="progress" class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <svg  id="plus" width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-bar-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5z"/>
                </svg>
            </div>
        </section>

        <section class="container mt-5 mb-5 ">
           
            <p class="font-weight-bold m-3">Recevez votre copie gratuite d'internet 2!</p>
                
            <form action="" methode="POST"  >
            <div class="row justify-content-around">
                <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">@</span>
                        </div>
                        <input  type="text" class="form-control" placeholder="Login" aria-label="Username" aria-describedby="basic-addon1">
                    </div>

                    <div class="input-group mb-3">
                        <input  type="text" class="form-control" placeholder="Mot de passe" aria-label="Recipient's username" aria-describedby="basic-addon2">
                        <div class="input-group-append">
                            <span class="input-group-text" id="basic-addon2">@example.com</span>
                        </div>
                    </div>
                    <p>URL des internets 2 et 2.1 Beta</p>

                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text">DogCoin</span>
                        </div>
                        <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
                        <div class="input-group-append">
                            <span class="input-group-text">.00</span>
                         </div>
                    </div>

                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon3">https://l33t.lptf/dkwb/berlusconimkt/</span>
                        </div>
                        <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3">
                    </div>
                </div>
                    

                   
                <div class="col-lg-4 col-md-6 col-sm-12 col-12 ">
                    <div class="form-group ">
                        <label for="exampleInputEmail1" >Email address</label>
                        <input id="form_mail" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1" >Password</label>
                        <input id="form_mdp" type="password" class="form-control" id="exampleInputPassword1">
                    </div>
                    <div class="form-group form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1">
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button id="form_btn" type="submit" class="btn btn-primary">Submit</button>
                </div>
            </div>
            </form>
                
        </section>
        
       
    </div>    

    <div id="modal2" class="modal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Modal title</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <p id="login"></p>
                    <p id="mail"></p>
                 </div>
            </div>
        

        </div>
    </div>

    </main>

    <p>© Copyright Céline Emptoz Lacote</p>

    
</body>
</html>