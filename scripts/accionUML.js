$(document).ready(function(){
  
  $(".opcionInterna").click(function(){
    var t=$(this).attr('name');
	$("#divContenido").load(t);
  });
});//ready