import {Component} from '@angular/core';
import {AutocompleteAbstract} from './autocomplete.abstract';

@Component({
    selector: 'app-parent',
    template: `parent...`
})
export class ParentComponent extends AutocompleteAbstract {

    // Override
    message: string = "override super.message";
}
