package com.example.operacionesandroid;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

public class OperacionesBasicas extends AppCompatActivity {

    EditText caja1;
    EditText caja2;
    Button btnSumar;
    Button btnRestar;
    Button btnMultiplicar;
    Button btnDividir;
    TextView labelResultado;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_operaciones_basicas);

        caja1 = (EditText)findViewById(R.id.text1);
        caja2 = (EditText)findViewById(R.id.text2);
        btnSumar = (Button)findViewById(R.id.btnSumar);
        btnRestar = (Button)findViewById(R.id.btnRestar);
        btnMultiplicar = (Button)findViewById(R.id.btnMultiplicar);
        btnDividir = (Button)findViewById(R.id.btnDividir);
        labelResultado = (TextView)findViewById(R.id.textResultado);

        btnSumar.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String vara = caja1.getText().toString();
                String varb = caja2.getText().toString();
                operaciones_basicas operaciones = new operaciones_basicas(Integer.parseInt(vara),Integer.parseInt(varb));
                String res = operaciones.sumar();
                Toast.makeText(OperacionesBasicas.this,"La suma de "+vara+" + "+varb+" = "+res,Toast.LENGTH_SHORT).show();
                labelResultado.setText("El resultado de " + res);
            }
        });

        btnRestar.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String vara = caja1.getText().toString();
                String varb = caja2.getText().toString();
                operaciones_basicas operaciones = new operaciones_basicas(Integer.parseInt(vara),Integer.parseInt(varb));
                String res = operaciones.restar();
                Toast.makeText(OperacionesBasicas.this,"La suma de "+vara+" + "+varb+" = "+res,Toast.LENGTH_SHORT).show();
                labelResultado.setText("El resultado de " + res);
            }
        });

        btnMultiplicar.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String vara = caja1.getText().toString();
                String varb = caja2.getText().toString();
                operaciones_basicas operaciones = new operaciones_basicas(Integer.parseInt(vara),Integer.parseInt(varb));
                String res = operaciones.multiplicar();
                Toast.makeText(OperacionesBasicas.this,"La suma de "+vara+" + "+varb+" = "+res,Toast.LENGTH_SHORT).show();
                labelResultado.setText("El resultado de " + res);
            }
        });

        btnDividir.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String vara = caja1.getText().toString();
                String varb = caja2.getText().toString();
                operaciones_basicas operaciones = new operaciones_basicas(Integer.parseInt(vara),Integer.parseInt(varb));
                String res = operaciones.dividir();
                Toast.makeText(OperacionesBasicas.this,"La suma de "+vara+" + "+varb+" = "+res,Toast.LENGTH_SHORT).show();
                labelResultado.setText("El resultado de " + res);
            }
        });
    }
}
