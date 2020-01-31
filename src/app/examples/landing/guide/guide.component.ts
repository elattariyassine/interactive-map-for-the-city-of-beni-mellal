import { Component, OnInit, ViewChild, HostListener } from '@angular/core';

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
  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    //console.log(event);
    (document.querySelector('#map') as HTMLElement).style.height = '500px';
    console.log((document.querySelector('#map') as HTMLElement).style.height);
  }
  Allplaces = "all"
  placeQueVoire = "que voire"
  transport = "transport"
  OuManger = "ouManger"
  shopping = "shopping"
  OuDormir = "ouDormir"
  visiteTouristique = "visiteTouristique"


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
