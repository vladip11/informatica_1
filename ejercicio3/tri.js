function tria(){
	this.a=0;
	this.b=0;
	this.c=0;
	this.d=0;
	this.alfa=0;
	this.beta=0;
	this.gama=0;
	this.h=0;
	this.lee=lee;
	this.calcl=calcl;
	this.calcA=calcA;
	this.calh=calh;
	this.imp=imp;

	function lee(){
		with(this){
			d=parseInt(prompt("introducir la distancia",3));
			c=parseInt(prompt("introducir c",5));
			alfa=parseInt(prompt("introducir alfa",36));
		
		}
		
	}

	function calcl(){
		with(this){
		b=2*d;
		a=Math.pow((b*b+c*c-b*c*Math.cos(alfa*(Math.PI/180))),0.5);
		
		}
	}
	function calcA(){
		with(this){
			beta=Math.asin((b/a)*Math.sin(alfa*(Math.PI/180)))*(180/Math.PI);
			gama=180-beta-alfa;
		}
	}
	function calh(){
		with(this){
		h=Math.pow(a*a-(b*b)/4,0.5);
		}
	}
	function imp(){
		with(this){
			document.writeln("el valor del lado a es : "+a+"\n");
			document.writeln("el valor del lado b es : "+b);
			document.writeln("el valor del lado c es : "+c);
			document.writeln("el valor de alfa es : "+alfa);
			document.writeln("el valor de beta es : "+beta);
			document.writeln("el valor de gamma es : "+gama);
			document.writeln("el valor de la altura es : "+h);

		}
	}
}

var r=new tria();
r.lee();
r.calcl();
r.calcA();
r.calh();
r.imp();
delete r;