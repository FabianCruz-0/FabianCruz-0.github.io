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
        window.onload = function(){
            if(window.innerWidth<=992)
            {
                img.width = 1080;
                img.height =window.innerHeight;
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
            if(window.innerWidth >= 790 && window.innerWidth <= 992)
            {
              img.position.x = - 112;
            }
        }
        window.onresize = function resi (){
            if(window.innerWidth<=992)
            {
                img.width = 1080;
                img.height =window.innerHeight;
            }else{
                img.width = window.innerWidth;
                img.height = window.innerHeight;
                img.position.x = 0;
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
