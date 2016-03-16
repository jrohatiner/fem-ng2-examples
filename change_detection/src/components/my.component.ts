import { Component, Input, ChangeDetectionStrategy } from 'angular2/core';

@Component({
  selector: 'my-component',
  template: `
    <span class="md-headline">{{counter.title}}: <strong>{{counter.count}}</strong></span>
  `,
    changeDetection: ChangeDetectionStrategy. // Switch change detection strategies
    // CheckAlways
    // CheckOnce
    // Checked
    // Detached
    // OnPush
    Default
})

export class MyComponent  {
 @Input() counter = {title: 'My Counter', count: 0}; 
}