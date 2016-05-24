import { Component, ViewEncapsulation } from '@angular/core';
import { MATERIAL_DIRECTIVES } from 'ng2-material';

@Component({
  selector: 'my-component',
  template: `
    <md-list>
      <md-subheader class="md-no-sticky">
        <div layout layout-align="space-between center">
          <h3>Items</h3>
          <button (click)="toggleList()" md-button md-raised-button class="md-secondary">Toggle List</button>
        </div>
      </md-subheader>
      <div *ngIf="showList">
        <md-list-item [ngClass]="{stripe: index % 2 === 0}" class="md-3-line inset" *ngFor="let item of items; #index = index">
          <div class="md-list-item-text" layout="column">
            <h3>ID: <strong>{{ index + 1 }}</strong></h3>
            <h4>{{ item.name }}</h4>
            <p>{{ item.description }}</p>
          </div>
        </md-list-item>
      </div>
    </md-list>
  `,
  styles: [` .stripe { background-color: whitesmoke; } `]
  directives: [MATERIAL_DIRECTIVES]
})

export class MyComponent {
  private items: Array<{name: String, description: String}> = [
    { name: 'Item 1', description: 'Epic item!' },
    { name: 'Item 2', description: 'As great as the first!' },
    { name: 'Last One', description: 'A round of applause for this one' }
  ];

  private showList: Boolean = true;

  toggleList() {
    this.showList = !this.showList;
  }
}
