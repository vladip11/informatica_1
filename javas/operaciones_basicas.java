package com.example.operacionesandroid;

public class operaciones_basicas {
    private int a;
    private int b;

    public operaciones_basicas() {
    }

    public operaciones_basicas(int a, int b) {
        this.a = a;
        this.b = b;
    }

    public int getA() {
        return a;
    }

    public void setA(int a) {
        this.a = a;
    }

    public int getB() {
        return b;
    }

    public void setB(int b) {
        this.b = b;
    }

    public String sumar(){
        return "la suma es: "+(this.a+this.b);
    }

    public String restar(){
        return "la resta es: "+(this.a-this.b);
    }

    public String multiplicar(){
        return "la multiplicacion es: "+(this.a*this.b);
    }

    public String dividir(){
        return "la suma es: "+(this.a/this.b);
    }
}
