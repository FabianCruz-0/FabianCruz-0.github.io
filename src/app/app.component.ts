import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  
  ngOnInit(): void {

    let cursor = document.getElementById('cursor')!;

    document.addEventListener('mousemove', (e)=>{
      cursor.style.left = e.pageX+"px";
      cursor.style.top = e.pageY+"px";
    })

  }

  public constructor(private titleService: Title)
  {
     this.setTitle('Fabián Cruz')
   }

   

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }


}
