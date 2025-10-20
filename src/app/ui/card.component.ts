import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'card-component',
  template: `
    <div class="flex flex-row gap-4">
      <div class="flex items-center justify-center w-12 h-12 bg-[#E0F2FE] rounded-full">
        <img src="/icons/card-icon.svg" alt="card-icon" />
      </div>
      <div class="flex flex-col justify-between gap-4">
        <div>
          <span>{{ subtitle() }}</span>
          <h1
            class="text-[#121926] text-left font-medium text-base leading-6 font-poppins tracking-normal"
          >
            {{ title() }}
          </h1>
        </div>
        <ng-content select="[card-content]"></ng-content>
      </div>

      <div class="flex ml-auto">
        <ng-content select="[card-action]"></ng-content>
      </div>
    </div>
  `,
  imports: [MatIconModule, MatButtonModule],
  host: {
    class: 'block h-full w-full bg-white py-5 px-6 rounded-lg',
  },
})
export class CardComponent {
  title = input.required<string>();
  subtitle = input.required<string>();
}
