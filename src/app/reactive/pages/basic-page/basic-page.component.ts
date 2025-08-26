import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

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

  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    price: [0, [Validators.required, Validators.min(10)]],
    inStorage: [0, [Validators.required, Validators.min(0)]],
  })


  // myForm = new FormGroup({
  //   name: new FormControl(''),
  //   price: new FormControl(0),
  //   inStorage: new FormControl(0),
  // });


  isValidField(fieldName: string): boolean | null {
    return (this.myForm.controls[fieldName].errors && this.myForm.controls[fieldName].touched);
  }

  getFieldError(fieldName: string): string | null {
    if ( !this.myForm.controls[fieldName]) return null;

    const errors = this.myForm.controls[fieldName].errors ?? {};

    for(const key of Object.keys(errors)){
      switch(key){
        case 'required':
          return 'Este campo es requerido';
        case 'minlength':
          return `Mínimo ${errors['minlength'].requiredLength} caracteres.`;
        case 'min':
          return `El valor mínimo de ${errors['min'].min}.`;
      }
    }

      return null;
  }

  onSave(){
    if(this.myForm.invalid){
    this.myForm.markAllAsTouched();
    return;
  }
    console.log(this.myForm.value);
    this.myForm.reset({
      name: '',
      price: 0,
      inStorage: 0
    }
    );
}
}
