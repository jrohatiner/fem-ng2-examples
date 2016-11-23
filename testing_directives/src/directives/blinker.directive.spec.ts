import { TestBed, async } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

import { MockComponent } from './blinker.mock.component';

describe('Directive: femBlinker', () => {
  let fixture;

  beforeEach(()=> {
    TestBed
      .configureTestingModule({
        declarations: [MockComponent]
    });

    fixture = TestBed.createComponent(MockComponent);
  });

  it('should switch from black to red and back every 300ms', async(() => {
    // fixture = TestBed.createComponent(MockComponent);
    // console.log('FIXTURE: ', fixture);

    // let element = fixture.nativeElement.querySelector('h1');
    //
    // console.log('ELEMENT: ', element);
    //
    // setTimeout(() => {
    //   expect(element.style.color).toBe('red');
    // }, 300);
    //
    // setTimeout(() => {
    //   expect(element.style.color).toBe('black');
    //   done();
    // }, 600);
  }));
});
