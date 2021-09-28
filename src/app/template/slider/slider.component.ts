import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  public images = [
    {
      title: "img 1",
      src: "https://images.unsplash.com/photo-1632228737456-f76b14fc0071?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
    },
    {
      title: "img 2",
      src: "https://images.unsplash.com/photo-1632251431418-b4e5fe2410b0?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
    },
    {
      title: "img 3",
      src: "https://images.unsplash.com/photo-1632251431418-b4e5fe2410b0?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
