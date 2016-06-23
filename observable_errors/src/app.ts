import { Component, ElementRef } from '@angular/core';
import { Code } from './code/code';
import * as Rx from 'rxjs/Rx';

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
    <div class="rendered" flex layout>
      <md-list>
        <md-subheader class="md-no-sticky md-headline">Message</md-subheader>
        <md-list-item class="md-2-line">
          <div class="md-list-item-text">
            <h3>NEXT: {{nextMessage}}</h3>
            <h3>ERROR: {{errorMessage}}</h3>
            <h3>COMPLETED: {{completedMessage}}</h3>
          </div>
        </md-list-item>
      </md-list>
    </div>
  `,
  directives: [Code]
})

export class App {
  nextMessage: string;
  errorMessage: string;
  completedMessage: string;

  constructor() {
    var source = Rx.Observable
        .of(42)
        // This will complete in 5 seconds
        .delay(5000)
        // We will override this to throw an error in 1 second
        .timeout(1000, new Error('Timeout has occurred.'))
        // Uncomment this to catch the error and continue the stream
        // .catch(() => Rx.Observable.of('Recovering!'))
      ;

    var subscription = source.subscribe(
        x => this.nextMessage = x, // onNext handler
        err => this.errorMessage = err, // onError handler
        () => this.completedMessage = 'Completed'; // onComplete handler
      );
  }
}
