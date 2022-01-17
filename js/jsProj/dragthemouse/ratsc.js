//Drag and drop mouse to the cheese
const rat = document.getElementById('rat');
let clickTrackerX = 0, clickTrackerY = 0;

rat.addEventListener("mousedown", e => {
    if(e.button == 0){
        window.addEventListener("mousemove", moved);
    }
}
);

function moved(e){
    if(e.buttons == 0){
        window.removeEventListener("mousemove", moved);
    }

    else{
        window.addEventListener("mouseup", e => {
             
            rat.style.top = e.clientY + "px";
            rat.style.left = e.clientX + "px";
        });

    }
}

