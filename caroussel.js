$(document).ready(function(){
	var interv = setInterval(affiche, 2000);

	var tab = document.getElementById("caroussel").getElementsByTagName('img').length
	for (var i = 0; i < tab; i++) {
		$("#vide").append("<td><img src="+ "\"vide.png\"" + "/></td>");
		$("#plein").append("<td><img src=" + "\"plein.png\"" + "/></td>");
	}

	$("#plein td").hover(function(){
		if ($(this).index() == 0 && actuel == max+1){
    	$(this).css("opacity", "0.7");}
		else if ($(this).index() != actuel){
    	$(this).css("opacity", "0.2");}
    },function(){
    	if ($(this).index() == 0 && actuel == max+1){
    	$(this).css("opacity", "0.7");}
		else if ($(this).index() != actuel){
    	$(this).css("opacity", "0");}
    });
	
	$("#plein td").click(function(){
		actuel = $(this).index()-1;
		suivant = actuel+1;
		precedent = actuel-1;
		affiche();
		clearInterval(interv);
		interv = setInterval(affiche, 2000);
    });
	
	$("#left").click(function() {
		inverse();
		clearInterval(interv);
		interv = setInterval(affiche, 2000);
	});
	$("#left").mousedown(function() {
		$("#left").addClass("skl");
	});
	$("#left").mouseup(function() {
		$("#left").removeClass("skl");
	});

	$("#right").click(function() {
		affiche();
		clearInterval(interv);
		interv = setInterval(affiche, 2000);
	});
	$("#right").mousedown(function() {
		$("#right").addClass("skl");
	});
	$("#right").mouseup(function() {
		$("#right").removeClass("skl");
	});
});	

var actuel = 0;
var suivant = actuel+1;
var precedent = actuel-1;
var max;

function affiche() {
	max = document.getElementById("caroussel").getElementsByTagName('img').length - 1;

	if (actuel == max) {suivant = 0;}
	if (actuel == max-1) {suivant = max;}
	if (actuel == max+1) {actuel = 0; suivant = 1;}
	if (actuel == -1) {actuel = max; precedent = max-1;}
	if (actuel == 1) {precedent = 0;}
	if (actuel == 0) {precedent = max;}

	//alert ("precedent = " + precedent + " & actuel = " + actuel + " & suivant* = " + suivant);
	
	$("#plein td").css("opacity","0");
	$("#plein td:eq("+suivant+")").css("opacity","0.7");
	$("#caroussel img").fadeOut(1000);
	$("#caroussel img:eq("+suivant+")").fadeIn(1000);
	
	actuel++;
	suivant++;
	precedent++;
}
function inverse() {
	max = document.getElementById("caroussel").getElementsByTagName('img').length - 1;

	if (actuel == max) {suivant = 0;}
	if (actuel == max-1) {suivant = max;}
	if (actuel == max+1) {actuel = 0; suivant = 1;}
	if (actuel == -1) {actuel = max; precedent = max-1;}
	if (actuel == 1) {precedent = 0;}
	if (actuel == 0) {precedent = max;}

	//alert ("precedent* = " + precedent + " & actuel = " + actuel + " & suivant = " + suivant);
	
	$("#plein td").css("opacity","0");
	$("#plein td:eq("+precedent+")").css("opacity","0.7");
	$("#caroussel img").fadeOut(1000);
	$("#caroussel img:eq("+precedent+")").fadeIn(1000);

	actuel--;
	suivant--;
	precedent--;
}