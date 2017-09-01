import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from '../../models/field-config.interface';

@Component({
  selector: 'app-form-button',
  styleUrls: ['./form-button.component.css'],
  templateUrl: './form-button.component.html'
})
export class FormButtonComponent {
  config: FieldConfig;
  group: FormGroup;
}
