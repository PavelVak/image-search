import { Component, ViewContainerRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FieldConfig } from '../../models/field-config.interface';

@Component({
  selector: 'app-form-input',
  styleUrls: ['./form-input.component.css'],
  templateUrl: './form-input.component.html'
})
export class FormInputComponent {
  config: FieldConfig;
  group: FormGroup;

  ngOnInit() {
    this.group.addControl(this.config.name, new FormControl())
  }
}

let formConf = [
  {tag: 'input', type: 'text', name: 'username'},
  {tag: 'row', type: 'group', name: 'name', children: [
    {tag: 'input', type: 'text', name: 'first', validators: ['minlength:6', 'required']},
    {tag: 'input', type: 'text', name: 'last', validators: ['maxlength:15', 'required']},
  ]},
  {tag: 'row', type: 'box', children: [
    {tag: 'input', type: 'text', name: 'first', validators: ['minlength:6', 'required']},
    {tag: 'input', type: 'text', name: 'last', validators: ['maxlength:15', 'required']},
  ]},
  {tag: 'input', type: 'email', name: 'email'},
]
