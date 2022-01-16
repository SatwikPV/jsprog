const para1 = document.getElementById("para-1");
const para2 = document.getElementById("para-2");
const para3 = document.getElementById("para-3");
const para4 = document.getElementById("para-4");
const para5 = document.getElementById("para-5");
const para6 = document.getElementById("para-6");

const menu1 = document.getElementById("menu-1");
const menu2 = document.getElementById("menu-2");
const menu3 = document.getElementById("menu-3");
const menu4 = document.getElementById("menu-4");
const menu5 = document.getElementById("menu-5");
const menu6 = document.getElementById("menu-6");


menu1.addEventListener('click', function(){ showMenu(1)});
menu2.addEventListener('click', function(){ showMenu(2)});
menu3.addEventListener('click', function(){ showMenu(3)});
menu4.addEventListener('click', function(){ showMenu(4)});
menu5.addEventListener('click', function(){ showMenu(5)});
menu6.addEventListener('click', function(){ showMenu(6)});


function showMenu(n){
	if(n == 1){
		reset();
		para1.style.display = "block";
		
	}

	else if(n==2){
		reset();
		para2.style.display = "block";
		
	}

	else if(n==3){
		reset();
		para3.style.display = "block";
		
	}	

	else if(n==4){
		reset();
		para4.style.display = "block";
		
	}	


	else if(n==5){
		reset();
		para5.style.display = "block";
		
	}


	else if(n==6){
		reset();
		para6.style.display = "block";
		
	}

	animate = setTimeout(showMenu, 1000);

}

function reset(){
para1.style.display = "none";
para2.style.display = "none";
para3.style.display = "none";
para4.style.display = "none";
para5.style.display = "none";
para6.style.display = "none";
}

