import { Component, Input } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-result-dialog',
  templateUrl: './result-dialog.component.html',
  styleUrls: ['./result-dialog.component.css']
})
export class ResultDialogComponent {

    @Input() score;

    constructor(public dialogRef: MdDialogRef<ResultDialogComponent>) { }

}
