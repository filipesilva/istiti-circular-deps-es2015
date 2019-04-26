import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div [appAutocomplete]="autocompleteVariable"></div>
    <app-parent #autocompleteVariable></app-parent>
  `
})
export class AppComponent {}
