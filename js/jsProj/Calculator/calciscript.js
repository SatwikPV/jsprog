//Creating a variable for each button
const one = document.getElementById("1");
const two = document.getElementById("2");
const three = document.getElementById("3");
const four = document.getElementById("4");
const five = document.getElementById("5");
const six = document.getElementById("6");
const seven = document.getElementById("7");
const eight = document.getElementById("8");
const nine = document.getElementById("9");
const plus = document.getElementById("+");
const minus = document.getElementById("-");
const multiply = document.getElementById("*");
const divide = document.getElementById("/");
const allclear = document.getElementById("AC");
const back = document.getElementById("BCK");
const equals = document.getElementById("=");
var display_text = []

var i = -1;

//Adding an event-Listener
one.addEventListener("click", function() {takeVal(1)});
two.addEventListener("click", function() {takeVal(2)});
three.addEventListener("click", function() {takeVal(3)});
four.addEventListener("click", function() {takeVal(4)});
five.addEventListener("click", function() {takeVal(5)});
six.addEventListener("click", function() {takeVal(6)});
seven.addEventListener("click", function() {takeVal(7)});
eight.addEventListener("click", function() {takeVal(8)});
nine.addEventListener("click", function() {takeVal(9)});
plus.addEventListener("click", function() {takeVal("+")});
minus.addEventListener("click", function() {takeVal("-")});
multiply.addEventListener("click", function() {takeVal("*")});
divide.addEventListener("click", function() {takeVal("/")});

allclear.addEventListener("click", clearfunc);
back.addEventListener("click", backfunc);
equals.addEventListener("click", evaluate);


var master_box = document.getElementById('box1');
var display_box = document.getElementById("box2");
var display_para = document.getElementById('p2')
console.log(display_box);

function takeVal(num){
    display_text[i++] = num;
    showVal(num);
}

function showVal(n){
    const node = document.createTextNode(n);
    display_para.appendChild(node);
}


function clearfunc(){
    console.log(display_para);
    //Clearing the eval array
    while(i != -1){
        i = i - 1;
    }

    //Clearing the box
    display_para.innerText = "";


    //Another way to do this...this is longer
    /*const emptyNode = document.createTextNode("");
    const emptyPara = document.createElement('p');
    emptyPara.appendChild(emptyNode);
    display_box.replaceChild(emptyPara, display_para);
    display_para = emptyPara;
    */
}

//function for when i hit backspace
function backfunc()
{
    console.log("Backfunc working");
    i--;
    display_para.innerText = "";
    
    for(var j=0; j<i; j++)
    {
        display_para.append(display_text[j]);
    }
}



function evaluate()
{
    console.log("evaluate working");
    console.log(display_text[-1]);

    //converting infix to postfix
    let postfix = [];
    let stack = [];
    topnum = -1;
    const allelem = i;
    i = -1;
    while(i != allelem){
        if(display_text[i] != '+' && display_text[i] != '-' && display_text[i] != '*' && display_text[i] != '/')
        {
            postfix.push(display_text[i++]);
        }


        else if(pr(display_text[i]) < pr(stack[topnum]))
        {
                while(topnum != -1){
                    postfix.push(stack[topnum]);
                    stack.pop(topnum);
                    topnum--;
                }
                
                stack.push(display_text[i]);
                topnum++;
                i++;
        }


        else{
            stack.push(display_text[i]);
            topnum++;
            i++;
        }
    
    }

    while(topnum != -1)
    {
        postfix.push(stack[topnum--]);
    }


    //precedence function

    function pr(m){
        if (m == "+" || m == "-"){
            return 1;
        }

        else if(m == "/" || m=="*")
        {
            return 2;
        }
    }


    //postfix evaluation
    let finalexp = [];
    stack = [];
    var j = 0;
    var k = 0;
    var n1, n2;
    while(j!=postfix.length)
    {
        if(postfix[j] != '+' && postfix[j] != '-' && postfix[j] != '/' && postfix[j] != '*'){
            stack[++topnum] = (postfix[j++]);
            
        }

        else if(postfix[j] == '*'){
             n1 = stack[topnum-1];
             n2 = stack[topnum];

            n2 = n1*n2;  
            j++;
            stack[topnum-1] = n2;
            topnum--;
        }


        else if(postfix[j] == '+'){
             n1 = stack[topnum-1];
             n2 = stack[topnum];

            n2 = n1+n2;  
            j++;
            stack[topnum-1] = n2;
            topnum--;
        }


        else if(postfix[j] == '-'){
             n1 = stack[topnum-1];
             n2 = stack[topnum];

            n2 = n1-n2;  
            j++;
            stack[topnum-1] = n2;
            topnum--;
        }


        else if(postfix[j] == '/'){
              n1 = stack[topnum-1];
             n2 = stack[topnum];

            n2 = n1/n2;  
            j++;
            stack[topnum-1] = n2;
            topnum--;
        }

    }

    finalexp.push(stack[topnum]);

    display_para.innerText = finalexp.toString();

}










