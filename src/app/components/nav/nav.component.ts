import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  @Input() sidenav;
  @Output() resetQuiz: EventEmitter<any> = new EventEmitter();

  constructor() { }

  closeSidenav() {
      this.sidenav.close();
      this.resetQuiz.emit();
  }

}
