import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: 'app-country-page',
  imports: [ReactiveFormsModule],
  templateUrl: './country-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryPageComponent { }
