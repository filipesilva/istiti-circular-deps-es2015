import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ParentComponent} from './parent.component';
import {AutocompleteDirective} from './autocomplete.directive';

@NgModule({
    declarations: [
        AppComponent,
        ParentComponent,
        AutocompleteDirective
    ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
