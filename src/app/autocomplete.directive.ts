import {Directive, Input} from '@angular/core';
import {AutocompleteAbstract} from './autocomplete.abstract';

@Directive({
  selector: '[appAutocomplete]'
})
export class AutocompleteDirective {

  /**
   *      WORKAROUND
   *
   *      In this @Input if you write type like  : AutocompleteAbstract | any;
   *      It is OK there is NO error at runtime !
   *
   *      WORKAROUND
   *
   */
  @Input('appAutocomplete') autocomplete : AutocompleteAbstract;

  // this is used in autocomplete.abstract.ts
  public static EMPTYLIST_ELEMENT = "_EMPTYLIST_";

  constructor() {}

}
