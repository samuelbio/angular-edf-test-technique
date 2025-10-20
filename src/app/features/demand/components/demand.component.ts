import { Component, inject, OnInit } from '@angular/core';
import { DemandPresenter } from '../presenters/demand-presenter.service';
import { DemandDialogComponent, DemandDialogData } from './demand-dialog/demand-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { DemandCardComponent } from './demand-card/demand-card.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Demand } from '../../../core/model/demand';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { EmptyCardComponent } from '../../../ui/empty-card.component';

@Component({
  selector: 'demand-component',
  templateUrl: './demand.component.html',
  host: {
    class: 'w-screen',
  },
  imports: [
    DemandCardComponent,
    MatIconModule,
    MatButtonModule,
    MatProgressBarModule,
    EmptyCardComponent,
  ],
})
export default class DemandComponent implements OnInit {
  readonly demandPresenter = inject(DemandPresenter);
  private readonly dialog = inject(MatDialog);

  ngOnInit() {
    this.demandPresenter.requestDemand();
  }

  openDialog(data?: Demand) {
    if (data) {
      this.updateDialog(data.id, data);
    } else {
      this.createDialog();
    }
  }

  private createDialog() {
    this.dialog
      .open<DemandDialogComponent, DemandDialogData>(DemandDialogComponent, {
        minWidth: '532px',
      })
      .afterClosed()
      .subscribe((result) => {
        if (result) {
          this.demandPresenter.createDemand(result);
        }
      });
  }

  private updateDialog(id: string, demand: Demand) {
    this.dialog
      .open<DemandDialogComponent, DemandDialogData>(DemandDialogComponent, {
        minWidth: '532px',
        data: { data: demand, state: 'edit' },
      })
      .afterClosed()
      .subscribe((result) => {
        if (result) {
          this.demandPresenter.updateDemand(id, result);
        }
      });
  }

  deleteDemand(id: string) {
    this.demandPresenter.deleteDemand(id);
  }
}
