import { Component, OnInit } from '@angular/core';
import { peliculas } from '../entidades/peliculas';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-allmovies',
  templateUrl: './allmovies.component.html',
  styleUrls: ['./allmovies.component.sass']
})
export class AllmoviesComponent implements OnInit {

  peli: peliculas = {} as peliculas;
  pelis:any;

  constructor(  private http: HttpClient, 
                private activatedRoiuter:ActivatedRoute) { 

    http.get('https://cineapp-plus.herokuapp.com/peliculas')
    .subscribe(response=>{this.pelis=response});

  }

  cargar(): void{
    this.http.get('https://cineapp-plus.herokuapp.com/peliculas')
    .subscribe(response=>{this.pelis=response});
  }

  enviarPos():void {
    this.http.post<peliculas>('https://cineapp-plus.herokuapp.com/peliculas/create', this.peli)
    .subscribe(Response => {
      console.log(Response);
      this.peli = {} as peliculas;
      window.location.reload();
    })
  }
  
  //obtener uno
  getUno(id:number): void{
    this.http.get("https://frozen-meadow-48728.herokuapp.com/uno/"+id)
  }

  //editar
  editar(id:number){
    this.http.get<peliculas>("https://frozen-meadow-48728.herokuapp.com/uno/"+id)
    .subscribe(
      response => {
        this.peli=response;
      },
      error => {
        console.log(error);
      });
  }

  //eliminar
  eliminar(id:number): void {
    if (confirm('¿Esta seguro que desea desactivar esta pelicula?')) {
      this.http.delete<peliculas>('https://frozen-meadow-48728.herokuapp.com/eliminar/' + id)
      .subscribe(
        response => {
         alert('Estudiante eliminado');
         window.location.reload();
        },
        error => {
          console.log(error);
        });
  }
}
  ngOnInit(): void {
    
  }

}
