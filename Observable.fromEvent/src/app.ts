import { Component, ElementRef } from 'angular2/core';
import { Code } from './code/code';
import { Observable } from 'rx.all';

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
      <md-list>
        <md-subheader class="md-no-sticky md-headline">Coordinates</md-subheader>
        <md-list-item class="md-2-line" *ngFor="#coordinate of coordinates">
          <div class="md-list-item-text">
            <p>x: {{coordinate.x}} y: {{coordinate.y}}</p>
          </div>
        </md-list-item>
      </md-list>
    </div>
  `,
  directives: [Code]
})

export class App {
  private coordinates: Array<{ x: Number, y: Number }> = [];
  
  constructor(elementRef:ElementRef) {
    Observable.fromEvent(elementRef.nativeElement, 'mousemove')    
      .debounce(20)
      .map(evt => { return {x: evt.clientX, y: evt.clientY}})
      .subscribe(
        coordinate => this.coordinates.unshift(coordinate)
        err => console.log('Error:', err),
        () => console.log('Completed')
      );
}

