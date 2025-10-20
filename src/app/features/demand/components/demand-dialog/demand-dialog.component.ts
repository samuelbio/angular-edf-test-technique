import { Component, inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { DemandCommand } from '../../../../core/model/demand';

export type FormBuilderType<T> = {
  [K in keyof T]: FormControl<T[K]>;
};

export interface DemandDialogData {
  data: DemandCommand;
  state: 'create' | 'edit';
}

@Component({
  selector: 'demand-dialog-component',
  templateUrl: './demand-dialog.component.html',
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  standalone: true,
})
export class DemandDialogComponent implements OnInit {
  readonly dialogRef = inject<MatDialogRef<DemandDialogComponent, DemandCommand>>(MatDialogRef);
  readonly dialogData = inject<DemandDialogData>(MAT_DIALOG_DATA);

  formBuilder = inject(NonNullableFormBuilder);
  readonly demandForm = this.formBuilder.group<FormBuilderType<DemandCommand>>({
    username: new FormControl(),
    projectName: new FormControl(),
    contract: new FormControl(),
  });

  ngOnInit() {
    if (this.dialogData && this.dialogData.state === 'edit' && this.dialogData.data) {
      const { data } = this.dialogData;
      this.demandForm.patchValue({ ...data });
    }
  }

  submit() {
    if (this.demandForm.invalid) {
      return;
    }
    const demandData: DemandCommand = this.demandForm.value as DemandCommand;
    this.dialogRef.close(demandData);
  }
}
