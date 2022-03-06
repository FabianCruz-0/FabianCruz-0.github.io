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
    let body = document.body;

    let app = new PIXI.Application({resizeTo: window});
      document.body.appendChild(app.view);
      let img = new PIXI.Sprite.from('./assets/imgs/background.jpg');
      img.height = body.offsetHeight;
      img.width = window.innerWidth;
      let minImgWidth = img.height*1.43626570916;

      if(window.innerWidth<minImgWidth)
      {
        img.width = minImgWidth+200;
        let aRestar = img.width-window.innerWidth;
        aRestar /=2;
        img.position.x-=aRestar+50;
      }
      app.stage.addChild(img);
      
/*
TODO:
Mantener la relación de aspecto de la imagen.
Si la pantalla tiene un ancho más grande que el ancho de la imágen con la relación de aspecto correcta,
hacer que el ancho de la imágen sea la de la pantalla, ampliando la anchura de la imagen solo cuando
sea necesario.
RELACION DE ASPECTO DE IMAGEN: 1.43626570916

UPDATE: I DID ITTTTTTTTTTTTTTTTTTTTT
*/

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
