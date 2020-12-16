mouseevent = "";
var last_x;
var last_y;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
 color = "black";
 width = "25";

canvas.addEventListener("mousedown", mouse_d);

function mouse_d(e){
    mouseevent = "mousedown";
    
}

canvas.addEventListener("mouseup", mouse_u);

function mouse_u(e){
    mouseevent = "mouseup";
    
}
canvas.addEventListener("mouseleave", mouse_l);

function mouse_l(e){
    mouseevent = "mouseleave";
    
}
canvas.addEventListener("mousemove", mouse_m);

function mouse_m(e){
    current_x = e.clientX - canvas.offsetLeft;
    current_y = e.clientY - canvas.offsetTop;

    if (mouseevent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth = width;
        
        console.log("Last position of x and y is = ");
        console.log ("x=" + last_x + "y=" + last_y);

        ctx.moveTo(last_x, last_y);

        console.log("Current position of x and y is = ");
        console.log ("x=" + current_x + "y=" + current_y);

         ctx.lineTo(current_x, current_y);

         ctx.stroke();
    }

    last_x = current_x;
    last_y = current_y;