function triangulo(){

	this.a=0;
	this.b=0;
	this.c=0;
	this.alfa=0;
	this.beta=0;
	this.leel=leel;
	this.calc_b=calc_b;
	this.calc_An=calc_An;
	this.MostR=MostR;
	

		function 	leel() {
			with(this){
				a=prompt("ingresar valor del un cateto",4);
				c=prompt("ingresar el valor de la hipotenusa",6);
			}
		}
		function	calc_b(){
		with(this){	
			var con;
			con=c*c-a*a;
			if(con>0){
				b=Math.pow(con,0.5);
				}else{
					alert("datos ingresados erroneos");
				}
			}
		}
		function calc_An(){
			with(this){
				alfa=Math.asin(a/c)*(180/Math.PI);
				beta=90-alfa;
			}
		}
		function	MostR(){
			with(this){
			document.write("   el valor del cateto restante es: "+b+"\n");
			document.write("   el valor del angulo respectivo a -a-...(alfa) es: "+alfa);
			document.write("   el valor del angulo respectivo a -b-....(beta) es: "+beta);
			}
		}

	
}
var x=new triangulo();
x.leel();
x.calc_b();
x.calc_An();
x.MostR();
delete x;