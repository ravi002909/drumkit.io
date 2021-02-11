for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function()
    {

     var c=this.innerHTML;
     press(c);
     click(c);
    });
}

document.addEventListener("keypress", function(event)
{
  press(event.key);
  click(event.k);
}
);

function press(key)
{
     switch(key)
     {
       case "w" :
        var tom1 =new Audio('sounds/tom-1.mp3')
        tom1.play();
       break;
       
       case "a" :
        var audio =new Audio('sounds/tom-2.mp3')
        audio.play();
       break;
       
       case "s" :
        var audio =new Audio('sounds/tom-3.mp3')
        audio.play();
       break;
       
       case "d" :
        var audio =new Audio('sounds/tom-4.mp3')
        audio.play();
       break; 

       case "j" :
        var audio =new Audio('sounds/snare.mp3')
        audio.play();
       break; 

       case "k" :
        var audio =new Audio('sounds/crash.mp3')
        audio.play();
       break; 

       case "l" :
        var audio =new Audio('sounds/kick-bass.mp3')
        audio.play();
       break;

     }
}

function click(k)
{
  var tap=document.querySelector("." + k);
  tap.classList.add("pressed");
  setTimeout(function()
  {
    tap.classList.remove("pressed");
  },100)
}
