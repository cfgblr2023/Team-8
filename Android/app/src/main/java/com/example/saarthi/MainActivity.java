package com.example.saarthi;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.ImageView;

import androidx.appcompat.app.AppCompatActivity;

;


public class MainActivity extends AppCompatActivity {
//    DrawerLayout drawerLayout;
//    NavigationView nv;
//    Toolbar toolbar;
    ImageView laymen, police, judge;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        laymen = findViewById(R.id.laymen);
        judge = findViewById(R.id.judge);
        police = findViewById(R.id.police);
        laymen.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent i = new Intent(getApplicationContext(), laymenreg.class);
                startActivity(i);
            }
        });
        judge.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent i = new Intent(getApplicationContext(), judgeregpage.class);
                startActivity(i);
            }
        });
        police.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent i = new Intent(getApplicationContext(), policereg.class);
                startActivity(i);
            }
        });
//        toolbar = findViewById(R.id.toolbar);
//        drawerLayout = findViewById(R.id.drawerlayout);
//        nv = findViewById(R.id.navigation);
//        setSupportActionBar(toolbar);
//        ActionBarDrawerToggle toggle = new ActionBarDrawerToggle(this, drawerLayout, toolbar, R.string.navigation_open, R.string.navigation_close);
//        drawerLayout.addDrawerListener(toggle);
//        toggle.syncState();





    }


}