import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  
  ngOnInit(): void {

    let currentX = 0
    let currentY = 0
    let aimX = 0
    let aimY = 0
    let speed = 0.1
    let cursor = document.getElementById('cursor')!;
    let contenido = document.getElementById('contenido')!;

    contenido.style.display = "none";
    setTimeout(function(){ contenido.style.display = "initial" }, 4500);
  

    function animate(){
      currentX += (aimX-currentX) * speed
      currentY += (aimY-currentY) * speed

      cursor.style.top = currentX+'px'
      cursor.style.left = currentY+'px'
      requestAnimationFrame(animate)
    }
    
    animate()

    document.addEventListener('mousemove', (e)=>{
      aimX = e.pageY
      aimY = e.pageX
    })

  }

  public constructor(private titleService: Title)
  {
     this.setTitle('Fabián Cruz - Software Engineer')
   }

   

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }


}
