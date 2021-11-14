import { animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

declare const THREE: any;

@Component({
  selector: 'app-three-back',
  templateUrl: './three-back.component.html',
  styleUrls: ['./three-back.component.css'],
})
export class ThreeBackComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let scene: any,
      camera: { position: { z: number; }; rotation: { x: number; }; aspect: number; updateProjectionMatrix: () => void; },
      renderer: {
        setSize: (arg0: number, arg1: number) => void;
        domElement: any;
        render: (arg0: any, arg1: any) => void;
      };

    let starGeo: { vertices: any[]; verticesNeedUpdate: boolean },
      star,
      stars: { rotation: { y: number } };

    function init() {
      scene = new THREE.Scene();

      camera = new THREE.PerspectiveCamera(
        60,
        (window.innerWidth+30) / (window.innerHeight+30),
        1,
        1000
      );
      camera.position.z = 1;
      camera.rotation.x = Math.PI / 2;

      renderer = new THREE.WebGLRenderer();
      renderer.setSize((window.innerWidth+30), (window.innerHeight+30));
      document.body.appendChild(renderer.domElement);

      starGeo = new THREE.Geometry();
      for (let i = 0; i < 6000; i++) {
        star = new THREE.Vector3(
          Math.random() * 600 - 300,
          Math.random() * 600 - 300,
          Math.random() * 600 - 300
        );
        star.velocity = 0;
        star.acceleration = 0.0002;
        starGeo.vertices.push(star);
      }

      let sprite = new THREE.TextureLoader().load('./assets/imgs/star.png');
      let starMaterial = new THREE.PointsMaterial({
        color: 0xaaaaaa,
        size: 0.7,
        map: sprite,
      });

      stars = new THREE.Points(starGeo, starMaterial);
      scene.add(stars);
      window.addEventListener('resize', onWindowResize, false);
      animate();
    }
    function onWindowResize() {
      camera.aspect = (window.innerWidth+30) / (window.innerHeight+30);
      camera.updateProjectionMatrix();
      renderer.setSize((window.innerWidth+30), (window.innerHeight+30));
    }

    function animate() {
      starGeo.vertices.forEach(
        (p: { velocity: number; acceleration: any; y: number }) => {
          p.velocity += p.acceleration;
          p.y -= p.velocity;

          if (p.y < -200) {
            p.y = 200;
            p.velocity = 0;
          }
        }
      );
      starGeo.verticesNeedUpdate = true;
      stars.rotation.y += 0.0002;

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }
    init();
  }
}