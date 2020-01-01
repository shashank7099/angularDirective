import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  _form: FormGroup;
  inputCtrl = new FormControl();
  name = 'Angular 5';

  constructor(private _fb: FormBuilder) {
    this._form = _fb.group({
      inputCtrl: '',
    });
  }
}
