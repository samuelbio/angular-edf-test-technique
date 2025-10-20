import { Component, input } from '@angular/core';

@Component({
  selector: 'status-component',
  template: ` <span class="rounded-full py-1 px-4" [class]="color()">{{ text() }}</span>`,
})
export class StatusComponentComponent {
  text = input.required<string>({ alias: 'label' });
  color = input<string>();
}
