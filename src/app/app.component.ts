import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  ngOnInit(): void {

    document.getElementById('cont')!.style.height=document.body.offsetHeight+"px";
    document.body.style.width=document.documentElement.clientWidth+"px";

    let currentX = -30
    let currentY = -30
    let aimX = -30
    let aimY = -30
    let speed = 0.2
    let cursor = document.getElementById('cursor')!;

    function animate() {
      currentX += (aimX - currentX) * speed
      currentY += (aimY - currentY) * speed

      cursor.style.top = currentX + 'px'
      cursor.style.left = currentY + 'px'
      requestAnimationFrame(animate)
    }

    animate()

    document.addEventListener('mousemove', (e) => {
      aimX = e.pageY
      aimY = e.pageX
    })

  }

  public constructor(private titleService: Title) {
    this.setTitle('Fabián Cruz - Software Engineer.')
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}
