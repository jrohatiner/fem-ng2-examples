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
  nextMessage: String;
  errorMessage: String;
  completedMessage: String;

  constructor() {
    var source = Observable
        .just(42)
        .delay(5000) // This will complete in 5 seconds
        .timeout(1000, new Error('Timeout has occurred.')) // We will override this to throw an error in 1 second
        // .catch(Observable.return('Recovering!'))
      ;
    
    var subscription = source.subscribe(
        x => this.nextMessage = x, // onNext handler
        err => this.errorMessage = err, // onError handler
        () => this.completedMessage = 'Completed'; // onComplete handler
      );
  }
}

