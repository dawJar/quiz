import { Component, Input } from '@angular/core';
import { Result } from '../../state/app-state';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent {

    @Input() result: Result;

    constructor() { }

}
