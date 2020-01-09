     
      var cursorAnimate = function cursorAnimate() {
        var speed =
          arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0.2;
        var cb =
          arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        cb(
          (parseFloat(window.innerWidth / 2) * speed).toPrecision(2),
          (parseFloat(window.innerHeight / 2) * speed).toPrecision(2)
        );
        window.addEventListener("mousemove", function(e) {
          e = e || window.event;
          var pageX = e.pageX;
          var pageY = e.pageY;

          if (pageX === undefined) {
            pageX =
              e.clientX +
              document.body.scrollLeft +
              document.documentElement.scrollLeft;
            pageY =
              e.clientY +
              document.body.scrollTop +
              document.documentElement.scrollTop;
          }
          cb(
            (parseFloat(pageX) * speed).toPrecision(2),
            (parseFloat(pageY) * speed).toPrecision(2)
          );
        });
      };
