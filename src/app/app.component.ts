import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<div class="container"><h1>Hello, {{name}}</h1>
              <test-ng></test-ng></div>`,
})
export class AppComponent {
  name = 'Ratnesh Shukla';
}
