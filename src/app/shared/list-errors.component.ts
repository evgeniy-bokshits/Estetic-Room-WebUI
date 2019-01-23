import { Component, Input } from '@angular/core';

import { Errors } from './models';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'list-errors',
  templateUrl: './list-errors.component.html'
})
export class ListErrorsComponent {
  formattedErrors: Array<string> = [];

  @Input()
  set errors(errorList: Errors) {
    this.formattedErrors = [];

    if (errorList.errors) {
      // tslint:disable-next-line:forin
      for (const field in errorList.errors) {
        this.formattedErrors.push(`${field} ${errorList.errors[field]}`);
      }
    }
  }

  get errorList() { return this.formattedErrors; }


}
