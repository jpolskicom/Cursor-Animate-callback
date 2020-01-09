# Cursor-Animate-callback
Make any animation while cursor move.

## example of ussage

      cursorAnimate(.08,function(x,y){
        document.querySelector('.element').style.transform = "translate("+y+"%,"+-x+"%)";
      });
