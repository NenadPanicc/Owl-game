$(document).ready(() => {
    
var x = 0;
var y = 0;
   
   
// OWL OBJECT
 class Owl {
     // MOVE UP 38
    static moveUp() {
        y+=20;
        console.log("Levo")
        $('.owl-body')
        .css({'position':'relative',
            'bottom':+y+'px'
     }) 
    }
     // MOVE LEFT 37
     static moveLeft() {
        x+=20;
         console.log("Levo")
         $('.owl-body')
         .css({'position':'relative',
            'right':+x+'px'
     })
    }
    // MOVE DOWN 40
    static moveDown() {
        y-=20;
            console.log("Levo")
            $('.owl-body')
            .css({'position':'relative',
                'bottom':+y+'px'
                }) 
    } 
    // MOVE RIGHT 39
    static moveRight() {
        x-=20;
            console.log("Levo")
            $('.owl-body')
            .css({'position':'relative',
                'right':+x+'px'
                }) 
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
     // MULTIPLE KEY PRESSES
     if(e.keyCode == 38 && e.keyCode == 37) {
        Owl.moveUp();
        Owl.moveLeft();
     }else if(e.keyCode == 38 && e.keyCode == 39) {
        Owl.moveUp();
        Owl.moveRight();
     }else if(e.keyCode == 40 && e.keyCode == 37) {
        Owl.moveDown();
        Owl.moveLeft();
     }else if(e.keyCode == 40 && e.keyCode == 39) {
        Owl.moveDown();
        Owl.moveRight();
     }
});  
})
