import { Component, Input, OnInit, OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { MATERIAL_DIRECTIVES } from 'ng2-material';

@Component({
  selector: 'my-component',
  template: `
    <h3 layout-margin><small>Counter:</small> {{counter}}</h3>
    <h1>Lifecyle hook log:</h1>
    <h3 *ngFor="let hook of hooks">{{hook}}</h3>
  `,
  directives: [MATERIAL_DIRECTIVES]
})

export class MyComponent implements OnInit, OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() counter: number = 0;
  hooks: Array<string> = [];

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
