import { Component, OnInit } from '@angular/core';
import {PetsService} from "../../services/pets.service";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  displayedColumns: string[] = ['id', 'name', 'raza', 'fecha_nac'];
  dataSource = [];

  constructor(private PetsService: PetsService) {
    this.PetsService.getPets().subscribe({
      next:(data)=>{
        this.dataSource = data.mascotas
      }
    })
  }

}
