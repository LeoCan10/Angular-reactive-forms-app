import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-basic-component',
  imports: [
    JsonPipe,
      ReactiveFormsModule
],
  templateUrl: './basic-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicPageComponent {

  fb = inject(FormBuilder);

  myForm = this.fb.group({
    name: ['', []/**Validadores Sincronicos*/, []/**Validadores Asincronos */],
    price: [0],
    inStorage: [0],
  })


  // myForm = new FormGroup({
  //   name: new FormControl(''),
  //   price: new FormControl(0),
  //   inStorage: new FormControl(0),
  // });

}
