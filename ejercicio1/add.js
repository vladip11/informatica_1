function eje(x,vo) {
	this.g=9.8;
	this.x=0;
	this.vo=0;
	this.hmax=0;
	this.tv1=0;
	this.tvt=0;
	this.vf=0;
	this.leed=leed;
	this.calcR=calcR;
	this.Most=Most;

	

		function leed(){
			with(this){
			x=prompt("ingrese el valor de la altura del suelo al punto de lanzamiento ",50);
			vo=prompt("ingrese el valor de la velocidad inicial",24);
		}
		}
		function calcR(){
			with(this){
			var t,h1,t2;
			t=vo/g;
			tv1=t*2; 
			h1=vo*t-g*0.5*t*t;
			hmax=h1+x;
			vf=Math.pow((vo*vo+2*g*x),0.5);
			t2=(vf-vo)/g;
			tvt=t2+tv1;
		}
		}
		function Most(){
			with(this){
			console.log("el valor de la altura maxima que alcanza el objeto es: "+hmax);
			console.log("el valor del tiempo de vuelo des de q se lanza hasta cuando recupera el nivel de lanzamiento es: "+tv1);
			console.log("el valor del tiempo total de vuelo desde que se lanza hasta que llega al suelo es de: "+tvt);
			console.log("el valor de la velocidad a la que llega el objeto al suelo es: "+vf);
		}
	}
}
var p=new eje();
p.leed();
p.calcR();
p.Most();
delete p;