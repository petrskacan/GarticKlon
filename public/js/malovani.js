window.onload = function () {
    canvas = document.getElementsByTagName('canvas')[0];
    kresleni = document.getElementById('kresleni');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    window.onresize = function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    c = canvas.getContext("2d");
    c.strokeStyle = "#FFF";
    window.addEventListener("touchstart", function (event) {
        c.beginPath();
        c.moveTo(event.touches[0].pageX, event.touches[0].pageY);

    });
    window.addEventListener("touchmove", function (event) {
        c.lineTo(event.touches[0].pageX, event.touches[0].pageY);
        c.stroke();
    });
    touch = false;
    window.addEventListener("mousedown", function (event) {
        touch = true;
        c.beginPath();
        c.moveTo(event.pageX, event.pageY);

    });
    window.addEventListener("mousemove", function (event) {
        if (touch) {
            c.lineTo(event.pageX, event.pageY);
            c.stroke();
        }
    });
    window.addEventListener("mouseup", function (event) {
        touch = false;
    });
    changesize = function (x) {
        c.lineWidth += x;
    }
    col = 0;
    changecolor = function (x) {
        switch (col + x) {
            case 0:
                c.strokeStyle = "#FFF";
                col += x;
                break;
            case 1:
                c.strokeStyle = "#F00";
                col += x;
                break;
            case 2:
                c.strokeStyle = "#0F0";
                col += x;
                break;
            case 3:
                c.strokeStyle = "#00F";
                col += x;
                break;
            case 4:
                c.strokeStyle = "#FF0";
                col += x;
                break;
            case 5:
                c.strokeStyle = "#0FF";
                col += x;
                break;
            case 6:
                c.strokeStyle = "#F0F";
                col += x;
                break;
            default:
                return;
        }
    }
}

var canvas,
    c,
    touch,
    changesize,
    changecolor,
    col;