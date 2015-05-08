(function() {
    window.onload = function() {
        var runner = document.getElementById("running");
        var step = 0;
        setInterval(display, 50);
            
        function display() {
            var y = Math.floor(step / 4);
            var x = step % 4;
                
            var xpos = (x === 0) ? "0px" : "-" + (x * 45) + "px";
            var ypos = (y === 0) ? "0px" : "-" + (y * 45) + "px";
            var pos = xpos + " " + ypos;
            runner.setAttribute("style", "background-position: "+pos);
                
            step = step + 1;
            step = step % 13
        }  
    }
} ())