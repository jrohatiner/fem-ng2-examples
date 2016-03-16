import { Component, Input } from 'angular2/core';
import { MATERIAL_DIRECTIVES } from 'ng2-material/all';

@Component({
  selector: 'my-component',
  template: `
    <h3 layout-margin><small>Counter:</small> {{counter}}</h3>
    <h1>Lifecyle hook log:</h1>
    <h3 *ngFor="#hook of hooks">{{hook}}</h3>
  `,
  directives: [MATERIAL_DIRECTIVES]
})

export class MyComponent {
  @Input() counter: Integer = 0;
  hooks: Array<String> = [];
  
  ngOnInit() {
    this.hooks.push('ngOnInit');
  }
  
  ngOnChanges() {
    this.hooks.push('ngOnChanges');
  }
  
  // ngDoCheck() {
  // If our component did its own change detection, we would use ngDoCheck and get rid of ngOnChanges
  // }
  
  ngAfterContentInit() {
    this.hooks.push('ngAfterContentInit');
  }
  
  ngAfterContentChecked() {
    this.hooks.push('ngAfterContentChecked');
  }
  
  ngAfterViewInit() {
    this.hooks.push('ngAfterViewInit');
  }
  
  ngAfterViewChecked() {
    this.hooks.push('ngAfterViewChecked');
  }
  
  ngOnDestroy() {
    alert('I am being destroyed!');
  }
}