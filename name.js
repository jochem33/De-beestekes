var persoon = prompt("Wat is jouw naam?", "Naam");

if (persoon == null || persoon == "") {
 alert("Je hebt niks ingetypd! Probeer het opnieuw");   
}

else {
    alert("Hoi " + persoon + "! Als er een betaling plaats vind, word het op jouw naam gezet.");
}