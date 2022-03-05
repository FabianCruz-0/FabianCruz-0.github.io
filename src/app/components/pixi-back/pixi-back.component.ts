import { Component, OnInit } from '@angular/core';

declare const PIXI: any;

@Component({
  selector: 'app-pixi-back',
  templateUrl: './pixi-back.component.html',
  styleUrls: ['./pixi-back.component.css']
})
export class PixiBackComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    let width_var = window.innerWidth+200;
    let height_var = window.innerHeight+200;

    let app = new PIXI.Application({ width: width_var, height:height_var});
      document.body.appendChild(app.view);
      let img = new PIXI.Sprite.from('./assets/imgs/background.jpg');
      app.stage.addChild(img);
      
/*
TODO:
Mantener la relación de aspecto de la imagen.
Si la pantalla tiene un ancho más grande que el ancho de la imágen con la relación de aspecto correcta,
hacer que el ancho de la imágen sea la de la pantalla, ampliando la anchura de la imagen solo cuando
sea necesario.
*/

        window.onload = function(){
            if(window.innerWidth<=992)
            {
                img.height =window.innerHeight;
                img.width = img.height*1.43626570916; //relación de aspecto de la imagen
            }else{
                img.width = window.innerWidth;
                img.height = window.innerHeight;
            }
            if(window.innerWidth <= 429)
            {
              img.position.x = - img.width/2.6;
            }
            if(window.innerWidth >= 430 && window.innerWidth <= 789)
            {
              img.position.x = - img.width/3.9;
            }
            if(window.innerWidth >= 992)
            {
              img.position.x = - 112;
            }
        }
        window.onresize = function resi (){
            if(window.innerWidth<=992)
            {
              img.height =window.innerHeight;
              img.width = img.height*1.43626570916;
            }else{
                img.width = window.innerWidth;
                img.height = window.innerHeight;
            }
        }
      let depthMap = new PIXI.Sprite.from('./assets/imgs/map.png');
      app.stage.addChild(depthMap);
      let displacementFilter = new PIXI.filters.DisplacementFilter(depthMap);
      app.stage.filters = [displacementFilter];
      window.onmousemove = function (e) {
        displacementFilter.scale.x = (window.innerWidth / 2 + e.clientX)*0.05;
        displacementFilter.scale.y = (window.innerHeight / 2 + e.clientY) *0.05;
      }
  }

}
