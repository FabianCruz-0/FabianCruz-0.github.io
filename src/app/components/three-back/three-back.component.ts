import { Component, OnInit } from '@angular/core';

declare const THREE:any;

@Component({
  selector: 'app-three-back',
  templateUrl: './three-back.component.html',
  styleUrls: ['./three-back.component.css']
})
export class ThreeBackComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {

    let scene =new THREE.Scene()
    console.log(scene);

  }

}
