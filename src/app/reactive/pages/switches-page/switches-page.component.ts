import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'switches',
  imports: [
    JsonPipe
  ],
  templateUrl: './switches-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwitchesPageComponent { }
