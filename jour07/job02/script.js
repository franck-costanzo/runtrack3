$(document).ready(function(){

  //FUNCTION
  function pagination(lien,texte,paragraphe) {
    $(lien).click(function(){

      $("#titre_jumbo").html(texte);
      $("#p_jumbo").html(paragraphe);

    })
  }

    

    var citations = ["J’ai vu tant de choses, que vous, humains, ne pourriez pas croire… De grands navires en feu surgissant de l’épaule d’Orion, j’ai vu des rayons fabuleux, des rayons C, briller dans l’ombre de la Porte de Tannhaüser. Tous ces moments se perdront dans l’oubli, comme les larmes dans la pluie. Il est temps de mourir.",
                    "Tous ces moments se perdront dans l’oubli, comme des larmes dans la pluie.",
                    "T’endors pas c’est l’heure de mourir.",
                    "C'est dommage qu'elle doive mourir, mais on en est tous là !",
                    "Avez-vous déjà désactivé un humain par erreur ?"]


    $("#bouton").click(function(){

      let nbr_mini = 0;
      let nbr_max = citations.length -1;

      let nombre_aleatoire = Math.floor(Math.random() * (nbr_max + 1) + nbr_mini);

      let newCitation = citations[nombre_aleatoire];
    
      $("#p_jumbo").html(newCitation);


    })

   
    pagination("#page1","Bonjour, monde","Il existe plusieurs visions du terme:le monde est la matière, l'espace et les phénomènes qui nous sont accessibles par les sens, l'exérience ou la raison.<br/>Le sens le plus corant désigne notre planéte, la Terre, avec ses habitants, et son environnement plus ou moins naturel.")
   
    pagination("#page2","Le titre de la page 2","Un contenu lié à la page 2")

    pagination("#page3","Le titre de la page 3","Un contenu lié à la page 3")


    $(".list-group-item").click(function(){
      if ($("#list").children().hasClass('active')){
        $("#list").children().removeClass("active");
      }

      $(this).addClass('active');
    })
      
  


    var value = $("#progress").attr('aria-valuenow');
    console.log

    $("#moins").click(function(){
      
      value--;
      console.log(value);
      $("#progress").attr('aria-valuenow',value);
      $("#progress").css('width',value+"%");

      
    })

    $("#plus").click(function(){
      value++;
      $("#progress").attr('aria-valuenow',value );
      $("#progress").css('width',value+"%");
    })

    


    //MOT DE PASSE
    var password = "";
    $('#modal2').css('display','none')
    window.addEventListener("keypress",function(e){
   
      
      let touche = e.keyCode;
      let mot = password + touche;
      password = mot;
    
      if ( password == 687167) {
        let login = $("form_login").attr("placeholder");
        console.log(login);
        $('#modal2').css('display','block');
      }



    var email = $("#form_mail").val();
    var mdp = $("#form_mdp").val();

    
    var tableau_couleurs = ["spinner-border text-primary"," spinner-border text-secondary","spinner-border text-success","spinner-border text-danger","spinner-border text-warning","spinner-border text-info",
                          "spinner-border text-light","spinner-border text-dark"]

    $("#form_btn").click(function(){
       

        if (email ==="" && mdp ===""){
          let nbre_min = 0;
          let nbr_max = tableau_couleurs.length - 1;

          let nbr_aleatoire = Math.floor(Math.random() * (nbr_max + 1) + nbre_min);
          
          let new_spinner = tableau_couleurs[nbr_aleatoire];
          $('#spinner').attr("class",new_spinner);
        }

    })
        
       
    })
  
  
          
      
       
  


      
 
})