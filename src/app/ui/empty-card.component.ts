import { Component, output } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'empty-card-component',
  imports: [MatButton, MatIcon],
  template: `
    <div class="flex flex-row justify-between items-center gap-4 bg-white py-5 px-6 rounded-lg">
      <span
        class="text-[#121926] text-left font-medium text-base leading-6 font-poppins tracking-normal"
        >Liste de demande vide</span
      >

      <button type="button" matButton="filled" (click)="add.emit()">
        <mat-icon>add</mat-icon>
        ajouter
      </button>
    </div>
  `,
})
export class EmptyCardComponent {
  add = output();
}
