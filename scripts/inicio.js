$(document).ready(function(){
$("#divContenido").load("util/centroInicio.html");
$("#divPie").load("util/pie.html");
  $(".opcion").click(function(){
    var t=$(this).attr('name');
	$("#divContenido").load(t);
  });

});//ready