import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.scss']
})
export class GuideComponent implements OnInit {

  constructor() { }
  @ViewChild('fullScreen') divRef;

  ngOnInit() {
  }

  Allplaces = "all"
  placeQueVoire = "que voire"


  onFullScreen(evt){
    const elem = this.divRef.nativeElement;
  
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen();
  } else if (elem.mozRequestFullScreen) {
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen();
  }
  const DynamiqueHigh = screen.height + 'px';
  (document.querySelector('#map') as HTMLElement).style.height = DynamiqueHigh;
  }

  
}
