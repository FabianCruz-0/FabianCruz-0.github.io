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
      
      document.getElementById("winWidth")!.innerHTML=minImgWidth+"";

      let depthMap = new PIXI.Sprite.from('./assets/imgs/map.png');
      app.stage.addChild(depthMap);
      let displacementFilter = new PIXI.filters.DisplacementFilter(depthMap);
      app.stage.filters = [displacementFilter];
      window.onmousemove = function (e) {
        if(window.innerWidth>minImgWidth-200)
        {
          displacementFilter.scale.x = (window.innerWidth / 2 + e.clientX)*0.05;
          displacementFilter.scale.y = (window.innerHeight / 2 + e.clientY) *0.05;
        }
      }
  }

}
