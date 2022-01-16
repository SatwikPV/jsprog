const disp_heads = document.getElementById("heads");


const disp_tails = document.getElementById("tails");

const headcount = document.getElementById("headcount");
const tailcount = document.getElementById("tailcount");

const tossbutton = document.getElementById("but-1");
const resetbutton = document.getElementById("but-2");


var currentHeadcount = 0, currentTailcount = 0;

disp_heads.style.visibility = "hidden";
disp_tails.style.visibility = "hidden";

const toss = tossbutton.addEventListener('click', tossfun);

function tossfun(){
	var res = 0;

	res = Math.floor(Math.random()*2);

	if(res == 0)
	{
		disp_heads.style.visibility = "visible";
		disp_tails.style.visibility = "hidden";
		currentHeadcount++;

		headcount.innerHTML = currentHeadcount;

	}

	else if(res == 1)
	{
		disp_tails.style.visibility = "visible";
		disp_heads.style.visibility = "hidden";

		currentTailcount++;

		tailcount.innerHTML = currentTailcount;
	}

}


const reset = resetbutton.addEventListener('click',function(){
	headcount.innerHTML = 0;
	tailcount.innerHTML = 0;
});



