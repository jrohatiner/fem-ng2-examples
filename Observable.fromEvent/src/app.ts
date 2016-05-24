import { Component, ElementRef, ChangeDetectorRef } from '@angular/core';
import { Code } from './code/code';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/observable/fromEvent';

@Component({
  selector: 'app',
  template: `
    <code-tabs></code-tabs>
    <md-toolbar>
      <div class="md-toolbar-tools">
        <div layout-margin layout layout-align="center">
          <h1>Output</h1>
        </div>
      </div>
    </md-toolbar>
    <div class="rendered" flex layout-fill layout>
    <pre>{{thingy}}</pre>
      <md-list>
        <md-subheader class="md-no-sticky md-headline">Coordinates</md-subheader>
        <md-list-item class="md-2-line" *ngFor="let coordinate of coordinates">
          <div class="md-list-item-text">
            <p>x: {{coordinate.x}} y: {{coordinate.y}}</p>
          </div>
        </md-list-item>
      </md-list>
    </div>
  `,
  directives: [Code]
})

export class App implements OnInit {
  coordinates: Array<{ x: Number, y: Number }> = [];

  constructor(
    private _elementRef:ElementRef,
    private _detectorRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    Observable.fromEvent(this._elementRef.nativeElement, 'mousemove')
    .debounceTime(20)
    .map(evt => { return {x: evt.clientX, y: evt.clientY}})
    .subscribe(
      coordinate => {
        this.coordinates.unshift(coordinate);
        this._detectorRef.detectChanges();
      },
      err => console.log('Error:', err),
      () => console.log('Completed')
    );
  }
}
