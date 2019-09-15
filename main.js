$(document).ready(() => {

    //COORDINATES    
var x = 0;
var y = 0;
// WORLD
var pos = $('#branch1').position();
var branch1Y = pos.top;
var branch1X = pos.left;
var owlPos = $('#owl-body').position();
var owlY = owlPos.top;
var owlX = owlPos.left;

setInterval(() => {
    pos = $('#branch1').position();
    branch1Y = pos.top;
    branch1X = pos.left;
    owlPos = $('#owl-body').position();
    owlY = owlPos.top;
    owlX = owlPos.left;
}, 100)



// OWL OBJECT
 class Owl {
     // MOVE UP 38
    static moveUp() {
        y+=20;
        if(y > 450){
            y-=50;
            $('.owl-body')
             .css({'position':'relative',
                     'bottom':+y+'px'
     }) 
        }else {
            $('.owl-body')
            .css({'position':'relative',
                'bottom':+y+'px'
         }) 
        }
    }
     // MOVE LEFT 37
     static moveLeft() {
         if(x > 300){
            x-=10;
            $('.owl-body')
            .css({'position':'relative',
               'right':+x+'px'
             })
         }else {
            x+=20;
            $('.owl-body')
            .css({'position':'relative',
               'right':+x+'px'
              })
         }
        
    }
    // MOVE DOWN 40
    static moveDown() {
        if(y < -180) {
            y+=10;
            $('.owl-body')
            .css({'position':'relative',
                'bottom':+y+'px'
                }) 
        }else {
            y-=20;
            $('.owl-body')
            .css({'position':'relative',
                'bottom':+y+'px'
                }) 
        }
        
    } 
    // MOVE RIGHT 39
    static moveRight() {
        if(x < -280) {
            x+=10;
            $('.owl-body')
            .css({'position':'relative',
                'right':+x+'px'
                }) 
        }else {
            x-=20;
            $('.owl-body')
            .css({'position':'relative',
                'right':+x+'px'
                }) 
        }
      
    }
 }

// EVENTS

// CLOUD ANIMATION
$( "#cloud2" ).slideDown( "slow", () => {
    // Animation complete.
});
// KEY PRESS EVENTS, MOVE THE OWL, 
$( window).keydown(e => {
    // SINGLE KEY PRESSES
      if(e.keyCode == 38){
          // Instantiate move up
          Owl.moveUp();
      }else if(e.keyCode == 37 ) {
          // Instantiate move left
          Owl.moveLeft();
      }else if(e.keyCode == 40) {
          // Instantiate move down
          Owl.moveDown();  
      }else if(e.keyCode == 39) {
          // Instantiate move right
          Owl.moveRight();
      }
     
});  
// OBJECT DETECTION
// CALCULATING THE DISTANCE BETWEEN TWO OBJECTS
function getDistance(x1, y1, x2, y2) {
    let xDistance = x2 - x1;
    let yDistance = y2 - y1;

    return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2))
}
// DISTANCE VARIABLE

var distance = getDistance(branch1X, branch1Y, owlX, owlY)
// CONSOLE LOGGING THE DISTANCE
setInterval(() => {console.log(distance)}, 1000)
// REFRESHING THE VALUE OF DISTANCE EVERY SECOND
setInterval(() => {distance = getDistance(branch1X, branch1Y, owlX, owlY)}, 1000)

// IF STATEMENT WHAT HAPPENS WHEN OBJECTS COLLIDE
setInterval(() => {
    if(distance < 860) {
    $('#owl-body').css({"transition-duration": "2s",
        "transform": "rotate(360deg)"})
}}, 100)

})
