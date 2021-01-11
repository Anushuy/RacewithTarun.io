canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

background_images_array=["https://image.shutterstock.com/image-photo/road-top-view-asphalt-highway-260nw-1037050396.jpg",
"https://i.stack.imgur.com/Oa1fu.pngs",
"https://thumbs.dreamstime.com/b/empty-highway-asphalt-road-texture-top-view-153274375.jpg",
"https://image.shutterstock.com/image-illustration/black-yellow-speed-bump-breaker-260nw-1031806198.jpg"];
random_number=Math.floor(Math.random()*4);

Car_width = 100;
Car_height = 90;

Car2_width = 100;
Car2_height = 90;

background_image = background_images_array[random_number];
console.log("background_image=" + background_image)

Car_image = "https://image.shutterstock.com/image-illustration/generic-red-car-top-angle-260nw-271630361.jpg";
Car2_image = "https://image.shutterstock.com/image-illustration/generic-silver-compact-car-top-260nw-578272555.jpg";

Car_x = 10;
Car_y = 10;

Car2_x = 10;
Car2_y = 100;

function add() {
    background_imgTag = new Image(); //defining a variable with a new image
    background_imgTag.onload = uploadBackground; // setting a function, onloading this variable
    background_imgTag.src = background_image;   // load image

    Car_imgTag = new Image(); //defining a variable with a new image
    Car_imgTag.onload = uploadCar; // setting a function, onloading this variable
    Car_imgTag.src = Car_image;   // load image

    Car_imgTag2 = new Image(); //defining a variable with a new image
    Car_imgTag2.onload = uploadCar2; // setting a function, onloading this variable
    Car_imgTag2.src = Car2_image;   // load image
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadCar() {
    ctx.drawImage(Car_imgTag, Car_x, Car_y, Car_width, Car_height);
}

function uploadCar2() {
    ctx.drawImage(Car_imgTag2, Car2_x, Car2_y, Car2_width, Car2_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
        if(keyPressed == '38')
        {
            up();
            console.log("up");
        }
        if(keyPressed == '87')
        {
            up2();
            console.log("up");
        }
        
        if(keyPressed == '40')
        {
            down();
            console.log("down");
        }
        
        if(keyPressed == '83')
        {
            down2();
            console.log("down");
        }
        
        if(keyPressed == '37')
        {
            left();
            console.log("left");
        }

        if(keyPressed == '65')
        {
            left2();
            console.log("left");
        }

        if(keyPressed == '39')
        {
            right();
            console.log("right");
        }

        if(keyPressed == '68')
        {
            right2();
            console.log("right");
        }
if(Car_x >= 700)
{
    console.log("Car1 Won");
    document.getElementById('game_status').innerHTML="Car 1 Won!!!!!"
    
}

if(Car2_x >= 700)
{
    console.log("Car2 Won");
    document.getElementById('game_status').innerHTML="Car 2 Won!!!!!"
    
}

}


function up2()
{
    if(Car2_y >=0)
    {
        Car2_y = Car2_y - 10;
        console.log("When up arrow is pressed,  x = " + Car2_x + " | y = " +Car2_y);
         uploadBackground();
         uploadCar2();
         uploadCar();
         
    }
}

function down2()
{
    if(Car2_y <=500)
    {
        Car2_y =Car2_y+ 10;
        console.log("When down arrow is pressed,  x = " + Car2_x + " | y = " +Car2_y);
        uploadBackground();
         uploadCar2();
         uploadCar();
    }
}

function left2()
{
    if(Car2_x >= 0)
    {
        Car2_x =Car2_x - 10;
        console.log("When left arrow is pressed,  x = " + Car2_x + " | y = " +Car2_y);
        uploadBackground();
         uploadCar2();
         uploadCar();
    }
}

function right2()
{
    if(Car2_x <= 700)
    {
        Car2_x =Car2_x + 10;
        console.log("When right arrow is pressed,  x = " + Car2_x + " | y = " +Car2_y);
        uploadBackground();
        uploadCar2();
        uploadCar();
   }
}

function up()
{
    if(Car_y >=0)
    {
        Car_y = Car_y - 10;
        console.log("When up arrow is pressed,  x = " + Car_x + " | y = " +Car_y);
         uploadBackground();
         uploadCar();
         uploadCar2();

    }
    
}
function down()
{
    if(Car_y <=500)
    {
        Car_y =Car_y+ 10;
        console.log("When down arrow is pressed,  x = " + Car_x + " | y = " +Car_y);
        uploadBackground();
         uploadCar();
         uploadCar2();
    }
}
function left()
{
    if(Car_x >= 0)
    {
        Car_x =Car_x - 10;
        console.log("When left arrow is pressed,  x = " + Car_x + " | y = " +Car_y);
        uploadBackground();
         uploadCar();
         uploadCar2();
    }
}


function right()
{
    if(Car_x <= 700)
    {
        Car_x =Car_x + 10;
        console.log("When right arrow is pressed,  x = " + Car_x + " | y = " +Car_y);
        uploadBackground();
        uploadCar();
        uploadCar2();
   }
}
