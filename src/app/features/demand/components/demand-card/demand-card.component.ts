import { Component, input, output } from '@angular/core';
import { CardComponent } from '../../../../ui/card.component';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { Demand } from '../../../../core/model/demand';
import { MatMenuModule } from '@angular/material/menu';
import { StatusComponentComponent } from '../../../../ui/status.component';
import { StatusPipe } from '../../../../ui/status.pipe';

@Component({
  selector: 'demand-card-component',
  template: `
    <div>
      <card-component [title]="demand().projectName" subtitle="Demande d'autorisation de travaux">
        <div class="flex flex-row gap-3" card-content>
          <span class="bg-[#364152] rounded-md py-1 px-2 text-white">{{ demand().username }}</span>
          <span class="bg-[#EEF2F6] rounded-md py-1 px-2 text-neutral-color"
            >Contrat {{ demand().contract }}</span
          >
        </div>

        <div card-action>
          <div class="flex flex-row align-center items-center gap-4">
            @if (demand().status; as status) {
              @let statusDisplay = status | statusPipe;
              <status-component [label]="statusDisplay.label" [color]="statusDisplay.color" />
            }
            <button matIconButton matButton [matMenuTriggerFor]="menu">
              <mat-icon>more_vert</mat-icon>
            </button>
            <mat-menu #menu="matMenu">
              <button mat-menu-item (click)="update.emit(demand().id)">Modifier</button>
              <button mat-menu-item (click)="delete.emit(demand().id)">Supprimer</button>
            </mat-menu>
          </div>
        </div>
      </card-component>
    </div>
  `,
  imports: [
    CardComponent,
    MatIcon,
    MatIconButton,
    MatMenuModule,
    StatusComponentComponent,
    StatusPipe,
  ],
})
export class DemandCardComponent {
  demand = input.required<Demand>();

  update = output<string>();
  delete = output<string>();
}
