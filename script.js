canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

background_image = "car racing 3.webp";

car1_width = 100;
car1_height = 90;

car2_width = 100;
car2_height = 90;

car1_image = "car1.png";
car2_image = "car1.png";

car1_x = 10;
car1_y = 10;

car2_x = 20;
car2_y = 40;

function add() {
    background_imgTag = new Image(); 
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    car1_imageTag = new Image();
    car2_imageTag = new Image();
    car1_imageTag.onload = uploadcar1;
    car2_imageTag.onload = uploadcar2;
    car1_imageTag.src = car1_image;
    car2_imageTag.src = car2_image;
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar1() {
    ctx.drawImage( car1_imageTag, car1_x, car1_y, car1_width, car1_height);
}

function uploadcar2() {
    ctx.drawImage( car2_imageTag, car2_x, car2_y, car2_width, car2_height);
}

function my_keydown(e){
    keyPressed = e.keyCode;
 console.log(keyPressed);
     if(keyPressed == '38'){
         car1_up();
         console.log("up arrow key");
        }
        
        if(keyPressed == '40'){
            car1_down();
            console.log("down arrow key");
        }

        if(keyPressed == '37'){
            car1_left();
            console.log("left arrow key");
        }

        if(keyPressed == '39'){
            car1_right();
            console.log("right arrow key");
        }

}

function my_keydown(e){
    keyPressed = e.keyCode;
 console.log(keyPressed);
     if(keyPressed == '38'){
         car2_up();
         console.log("up arrow key");
        }
        
        if(keyPressed == '40'){
            car2_down();
            console.log("down arrow key");
        }

        if(keyPressed == '37'){
            car2_left();
            console.log("left arrow key");
        }

        if(keyPressed == '39'){
            car2_right();
            console.log("right arrow key");
        }

}

function car1_up () 
{
  if(car1_y >=0) {
      car1_y = car1_y - 10;
      console.log("When up arrow is pressed, x = " + car1_x + " l y = " +car1_y);
      uploadBackground();
      uploadcar1();
      uploadcar2();
  }
}

function car1_down () 
{
  if(car1_y <=500) {
      car1_y = car1_y + 10;
      console.log("When up arrow is pressed, x = " + car1_x + " l y = " +car1_y);
      uploadBackground();
      uploadcar1();
      uploadcar2();
  }
}

function car1_left () 
{
  if(car1_x >=0) {
      car1_x = car1_x - 10;
      console.log("When up arrow is pressed, x = " + car1_x + " l y = " +car1_y);
      uploadBackground();
      uploadcar1();
      uploadcar2();
  }
}

function car1_right () 
{
  if(car1_x <=700) {
      car1_x = car1_x + 10;
      console.log("When up arrow is pressed, x = " + car1_x + " l y = " +car1_y);
      uploadBackground();
      uploadcar1();
      uploadcar2();
  }
}

function car2_up () 
{
  if(car2_y >=0) {
      car2_y = car2_y - 10;
      console.log("When up arrow is pressed, x = " + car2_x + " l y = " +car2_y);
      uploadBackground();
      uploadcar1();
      uploadcar2();
  }
}

function car2_down () 
{
  if(car2_y <=500) {
      car2_y = car2_y + 10;
      console.log("When up arrow is pressed, x = " + car2_x + " l y = " +car2_y);
      uploadBackground();
      uploadcar1();
      uploadcar2();
  }
}

function car2_left () 
{
  if(car2_x >=0) {
      car2_x = car2_x - 10;
      console.log("When up arrow is pressed, x = " + car2_x + " l y = " +car2_y);
      uploadBackground();
      uploadcar1();
      uploadcar2();
  }
}

function car2_right () 
{
  if(car2_x <=700) {
      car2_x = car2_x + 10;
      console.log("When up arrow is pressed, x = " + car2_x + " l y = " +car2_y);
      uploadBackground();
      uploadcar1();
      uploadcar2();
  }
}












