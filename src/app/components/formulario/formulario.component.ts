import {Component, EventEmitter, Output} from '@angular/core';
import {DialogMascotasComponent} from "../dialog-mascotas/dialog-mascotas.component";
import {MatDialog} from "@angular/material/dialog";
import {PetsService} from "../../services/pets.service";

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent{
  @Output() enviarMascota = new EventEmitter<Array<any>>();
  petName: string = "";
  petType: any = "";
  petTypes: Array<any> = [{value:'PERRO', id:1},
    {value:'GATO', id: 2}, {value:'HAMSTER', id:3}]
  petDate: Date = new Date();
  constructor(public dialog: MatDialog,
              private PetsService: PetsService) {}


  addPet(){
    const inputDate = this.petDate;
    const date = new Date(inputDate);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Los meses van de 0 a 11, por eso se suma 1
    const day = String(date.getDate()).padStart(2, '0');

    const formattedDate = `${year}-${month}-${day}`;
    const dialogRef = this.dialog.open(DialogMascotasComponent, {
      data: {name: this.petName, raza: this.petType.id, fecha_nac: formattedDate},
    });

    dialogRef.afterClosed().subscribe(result => {
      this.PetsService.createPet(result).subscribe({
        error: (err:any)=>{
          console.log(err)
        }
      })
    });
  }

}
