function somme() 
{
    var TT = "Somme est :";/*message reçoit welcome :*/
    var n1 = document.getElementById("numb1").value; /*récupération du nom */
    var n2 = document.getElementById("numb2").value;
    total = parseFloat(n1)  + parseFloat(n2) ;
    document.getElementById("sm1").innerText = TT + total; /*affichage dans paragraphe <p> qui a un id name*/
    document.getElementById("sm1").style.color = "red";/*coloration du résultat */
}

 