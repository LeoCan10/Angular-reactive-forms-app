import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule, FormArray, FormsModule, FormControl } from '@angular/forms';
import { FormUtils } from '../../../utils/form-utils';

@Component({
  selector: 'dynamic',
  imports: [
    JsonPipe,
      ReactiveFormsModule,
      FormsModule
],
  templateUrl: './dynamic-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicPageComponent {
  private fb = inject(FormBuilder);
  formUtils = FormUtils;

  myForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favoriteGames: this.fb.array([
      ['Metal Gear', Validators.required],
      ['Death Stranding', Validators.required],
    ], { validators: [Validators.minLength(2)] })
  });

  newFavorite = new FormControl('', Validators.required);

    get favoriteGames() {
      return this.myForm.get('favoriteGames') as FormArray;
    }

    onAddToFavorites() {
      if(this.newFavorite.invalid) {return;}
      const newGame = this.newFavorite.value;

      this.favoriteGames.push(
        this.fb.control(newGame, Validators.required)
      );

      this.newFavorite.reset();
      }

    onDeleteFavorite(index: number) {
      this.favoriteGames.removeAt(index);
    }

    onSubmit(){
      this.myForm.markAllAsTouched();
    }
 }
