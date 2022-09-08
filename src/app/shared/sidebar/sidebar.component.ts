import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;
  
  constructor(private gifsService: GifsService) { }
  ngOnInit(): void { 
  }

  get historial(){
    return this.gifsService.historial
  }

  buscar(item: string) {
    this.gifsService.buscarGifs(item)
  }


}
