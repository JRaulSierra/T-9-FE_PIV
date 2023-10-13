import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-dialog-mascotas',
  templateUrl: './dialog-mascotas.component.html',
  styleUrls: ['./dialog-mascotas.component.css']
})
export class DialogMascotasComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogMascotasComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
