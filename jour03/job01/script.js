let text = "le $ est un bon élément monétaire. " 
+"Le # de twitter est une bonne I D. Il faudra faire le point avec la"
+"classe pour cacher cet élément."


$(document).ready(function(){
  $("#button").click(function(){
    $("#button").after('<p>'+text+'</p>')
  });

  $("#nottub").click(function(){
    $('p').hide();
  });
});