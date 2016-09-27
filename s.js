var i=0;
function Next(){

	var q = ["THE MAN WHO PASSES THE SENTENCE SHOULD SWING THE SWORD.","THE THINGS I DO FOR LOVE.","THE NEXT TIME YOU RAISE A HAND TO ME WILL BE THE LAST TIME YOU HAVE HANDS!","WHEN YOU PLAY THE GAME OF THRONES, YOU WIN OR YOU DIE.","A  GIRL GIVES A MAN HIS OWN NAME?","A DRAGON IS NOT A SLAVE.","BURN THEM ALL","CHAOS ISN'T A PIT. CHAOS IS A LADDER.","IF YOU EVER CALL ME SISTER AGAIN, I'LL HAVE YOU STRANGLED IN YOUR SLEEP.","THE LANNISTERS SEND THEIR REGARDS","I'M GONNA HAVE TO EAT EVERY FUCKING CHICKEN IN THIS ROOM","YOU KNOW NOTHING, JON SNOW.","YOU'RE NO SON OF MINE.","THIS IS NOT THE DAY I DIE.","THE GOOD LORDS ARE DEAD, AND THE REST ARE MONSTERS","I'M NOT GOING TO STOP THE WHEEL. I'M GOING TO BREAK THE WHEEL","IT'S HARD TO PUT A LEASH ON A DOG ONCE YOU'VE PUT A CROWN ON ITS HEAD","I DEMAND A TRIAL BY COMBAT !","A MIND NEEDS A BOOKS LIKE A SWORD NEEDS A WHETSTONE","YOUR GOLD HE STEALS, YOUR WOMEN HE RAPES. THOSE ARE BRAVE MEN KNOCKING AT OUR DOOR. LET'S GO KILL THEM","I DRINK AND I KNOW THINGS","I'M HERE TO HELP. DON'T EAT THE HELP"];
    
    
    
    
    var a = ["Ned Stark","Jaime Lannister","Daenerys Targaryen","Cersei Lannister","Jaqen H'ghar","Daenerys Targaryen","Aerys Targaryen","Petyr Baelish","Cersei Lannister","Roose Bolton","Sandor Clegane","Ygritte","Tywin Lannister","Oberyn Martell","Brienne of Tarth","Daenerys Targaryen","Tyrion Lannister","Tyrion Lannister","Tyrion Lannister","Tyrion Lannister","Tyrion Lannister","Tyrion Lannister"];
 
 document.querySelector("#quote").textContent = q[i];
 document.querySelector("#author").textContent = a[i]; 
 document.querySelector("#next").textContent = "next";
var color = ["#ffffff","#ffe6e6","#ffcccc","#ffb3b3","#ff9999","#ff8080","#ff6666","#ff4d4d","#ff3333","#ff1a1a","#ff0000","#e60000","#cc0000","#b30000","#990000","#800000","#660000","#4d0000","#330000","#1a0000","#000000"];
document.getElementById("body").style.backgroundColor = color[i];
i++;
if(i==22)
{
	i=0;
}
if(i==16)
{
	document.querySelector("h1").style.color = "yellow";
}/*else{
	document.querySelector("h1").style.color = "black";
}*/
if(i>=0 && i<16)
{
document.querySelector("h1").style.color = "black";	
}



}