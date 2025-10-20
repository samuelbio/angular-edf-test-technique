import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'main-layout-component',
  imports: [RouterOutlet],
  template: `
    <div
      class="h-screen w-[861px] bg-neutral-50 opacity-100 bg-no-repeat bg-origin-padding flex mx-auto mt-20"
    >
      <router-outlet />
    </div>
  `,
})
export class MainLayoutComponent {}
