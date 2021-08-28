import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { peliculas } from '../entidades/peliculas';
import { AllmoviesService } from '../services/allmovies.service';

@Component({
  selector: 'app-editmovies',
  templateUrl: './editmovies.component.html',
  styleUrls: ['./editmovies.component.sass']
})
export class EditmoviesComponent implements OnInit {

  pelicula: peliculas = {
    titulo : '',
    duracion: '',
    clasificacion:'',
    imagen:'',
    genero: '',
    estatus: 'Activa',
    fechaEstreno: '',
    detalle_id: ''

  };
  edit: boolean = false;
  mensage = "Agregar pelicula";

  id: string | null | undefined;







  constructor(
    private allmovieService: AllmoviesService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private http: HttpClient,
    private formBuilder: FormBuilder
    ) {
      //this.getDetalle();

    

     

     }

  ngOnInit(): void {

    const param = this.activateRoute.snapshot.params;
    console.log(param)
    if (param) {
      this.allmovieService.getPelicula(param.id)
      .subscribe(
        res => {
          console.log(res);
          this.pelicula = res;
          this.edit = true;
        },
        err => console.log(err)
      )
    }
    
  }

  /*getDetalle(){
    this.allmovieService.getDetalle()
    .subscribe(
      (res :detalles[]) => {
        console.log(res);
        this.detalle = res ;
      },
      err => console.log(err),
    )
  }*/
  /*submitMovies(){
    this.allmovieService.createPelicula(this.miFormulario.value)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/all-movies']);
      },
      err => console.log(err)
    )
  }*/
  updatePelicula(){
  
    this.allmovieService.updatePelicula(this.pelicula._id, this.pelicula)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/all-movies'])
      },
      err => console.log(err)
    )
  }

}

