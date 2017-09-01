import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from '../../models/field-config.interface';

@Component({
  selector: 'app-form-select',
  styleUrls: ['./form-select.component.css'],
  templateUrl: './form-select.component.html'
})
export class FormSelectComponent {
  config: FieldConfig;
  group: FormGroup;
}
