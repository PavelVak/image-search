import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { DynamicFormComponent } from './dynamic-form/containers/dynamic-form/dynamic-form.component';
import { FieldConfig } from './dynamic-form/models/field-config.interface';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'Pixabay image Service';
  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;

  config: FieldConfig[] = [
    {
      type: 'input',
      label: 'Full name',
      name: 'name',
      placeholder: 'Enter your name',
      validation: [Validators.required, Validators.minLength(4)]
    },
    {
      type: 'select',
      label: 'Favourite Food',
      name: 'food',
      options: ['Pizza', 'Hot Dogs', 'Knakworstje', 'Coffee'],
      placeholder: 'Select an option',
      validation: [Validators.required]
    },
    {
      label: 'Submit',
      name: 'submit',
      type: 'button'
    }
  ];

  ngOnInit() {}

  ngAfterViewInit() {
    let previousValid = this.form.valid;
    this.form.changes.subscribe(() => {
      if (this.form.valid !== previousValid) {
        previousValid = this.form.valid;
        this.form.setDisabled('submit', !previousValid);
      }
    });

    this.form.setDisabled('submit', true);
    this.form.setValue('name', 'Anton Chesssshov');
  }

  submit(value: {[name: string]: any}) {
    console.log(value);
  }
}
