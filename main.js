var canvas=new fabric.Canvas('myCanvas');
player_x=10;
player_y=10;
block_image_width=30;
block_image_height=30;
var block_image_object="";
var player_object="";
function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });
}
function new_image(get_image){
fabric.Image.fromURL(get_image, function(Img){
block_image_object=Img;
block_image_object.scaleToWidth(block_image_width);
block_image_object.scaleToHeight(block_image_height);
block_image_object.set({
    top:player_y,left:player_x
});
canvas.add(block_image_object);
});
}
window.addEventListener("keydown", myKeydown);
function myKeydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey == true && keyPressed == '80'){
        console.log("se presiona shift y p al mismo timepo para agrandar los bloques.");
        block_image_width=block_image_width+10;
        block_image_height=block_image_height+10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }
    if(e.shiftKey == true && keyPressed == '81'){
        console.log("se presiona shift mas q al mismo tiempo para empequeneser los bloques.");
        block_image_width=block_image_width-10;
        block_image_height=block_image_height-10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }
    if(keyPressed == '87'){
        new_image('ground.png');
        console.log("w");
    }
    if(keyPressed == '65'){
        new_image('dark_green.png');
        console.log("a");
    }
    if(keyPressed == '83'){
        new_image('light_green.png');
        console.log("s");
}
if(keyPressed == '68'){
    new_image('roof.jpg');
    console.log("d");
}
if(keyPressed == '82'){
    new_image('trunk.jpg');
    console.log("r");
}
if(keyPressed == '70'){
    new_image('ground.png');
    console.log("f");
}
if(keyPressed == '84'){
    new_image('unique.png');
    console.log("t");
}
if(keyPressed == '71'){
    new_image('wall.jpg');
    console.log("g");
}
if(keyPressed == '89'){
    new_image('yellow_wall.png');
    console.log("y");
}
if(keyPressed == '38'){
    up();
    console.log("up");
}
if(keyPressed == '40'){
    down();
    console.log("down");
}
if(keyPressed == '37'){
    left();
    console.log("left");
}
if(keyPressed == '39'){
    right();
    console.log("right");
}
}
function right(){
    if (player_x <=850){
        player_x = player_x + block_image_width;
        console.log("ancho del bloque= "+block_image_width);
        console.log("cuando se presione la flecha derecha, X=" + player_x + ",Y =" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function left(){
    if(player_x >0){
        player_x = player_x - block_image_width;
        console.log("ancho de la imagen del blog" + block_image_width);
        console.log("cuando se presiona la tecla hacia la izquierda X=" + player_x + ",Y =" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function up(){
    if(player_y >=0){
        player_y = player_y - block_image_height;
        console.log("altura de la imagen del blog" + block_image_height);
        console.log("cuando se presiona la tecla hacia arriba X=" + player_x + ",Y =" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function down(){
    if(player_y <=500){
        player_y = player_y + block_image_height;
        console.log("altura de la imagen del blog" + block_image_height);
        console.log("cuando se presiona la tecla hacia la izquierda X=" + player_x + ",Y =" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}











































