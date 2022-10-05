function dibujar(){
	var c = document.getElementById("miCanvas");
	var ctx = c.getContext("2d");

	/* cambio el color del fondo */
	ctx.fillStyle="#A9CCE3"
	ctx.fillRect(0, 0, c.width, c.height);

  x=c.width;
  y=c.height;

  /* acomodo al personaje */
  var nave = new Image();
    nave.src="imagen/personajes/naveBuena.png"
    nave.onload = function(){
        ctx.drawImage(nave, x/2, y-100);
  }

  /* nave enemiga */
    var naveMala = new Image();
    naveMala.src="imagen/personajes/naveMala.png"
    naveMala.onload = function(){
        ctx.drawImage(naveMala, x/2, 20);
  }

    /* obstaculo 1 */
    var ob1 = new Image();
    ob1.src="imagen/personajes/asteroide1.png"
    ob1.onload = function(){
        ctx.drawImage(ob1, x/4, y/4);
  }

    /* obstaculo 2 */
    var ob2 = new Image();
    ob2.src="imagen/personajes/asteroide2.png"
    ob2.onload = function(){
        ctx.drawImage(ob2, x-x/4, 100+y/4);
  }

}


