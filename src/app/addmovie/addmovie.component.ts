import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { peliculas } from '../entidades/peliculas';

@Component({
  selector: 'app-addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.sass']
})
export class AddmovieComponent implements OnInit {

  peli: peliculas = {} as peliculas;
  pelis:any;

  //crearEstudiante: FormGroup;

  id: string | null;
  
  titulo = 'Agregar una nueva pelicula';

  constructor( //private fb: FormBuilder,
              private http: HttpClient,
              private aRoute: ActivatedRoute,
              private router: Router, 
              ) { 

       this.id = this.aRoute.snapshot.paramMap.get('id');
       
      // console.log(this.id)
  }

  ngOnInit(): void {
    this.esEditar();
  }

  enviarPos():void {

    this.http.post<peliculas>('https://frozen-meadow-48728.herokuapp.com/registrar', this.peli)
    .subscribe(Response => {
      console.log(Response);
      this.peli = {} as peliculas;
      this.router.navigate(['/listado']);
    })
  }

  //editar
  // editar(id:number){
 
  //   this.http.get<estudiante>("https://frozen-meadow-48728.herokuapp.com/uno/"+id)
  //   .subscribe(
  //     response => {
  //       this.usuario=response;
  //     },
  //     error => {
  //       console.log(error);
  //     });
  // }

  esEditar() : void{

    if (this.id === null) {
      this.titulo = 'Agregar Estudiante'
    } else {
      this.titulo = 'Editar Estudiante'
    }
    this.http.get<peliculas>("https://frozen-meadow-48728.herokuapp.com/uno/"+this.id)
    .subscribe(
      response => {
        this.peli=response;
      },
      error => {
        console.log(error);
      });
  }

}
