import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { peliculas } from '../entidades/peliculas';
import { AllmoviesService } from '../services/allmovies.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.sass'],
  providers: [AllmoviesService]
})
export class AddmovieComponent implements OnInit {

  
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


  miFormulario!: FormGroup;





  constructor(
    private allmovieService: AllmoviesService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private http: HttpClient,
    ) {

      this.miFormulario = new FormGroup({

        'titulo': new FormControl('',[Validators.required,Validators.minLength(2)]),
        'duracion': new FormControl('',[Validators.required,Validators.maxLength(15)]),
        'clasificacion':  new FormControl('',[Validators.required,Validators.maxLength(1)])
      });

     }

  ngOnInit(): void {
    const param = this.activateRoute.snapshot.params;
    console.log(param._id)
    if (param) {
      this.allmovieService.getPelicula(param._id)
      .subscribe(
        res => {
          console.log(res);
          this.pelicula = res;
          this.edit = true;
        }
      )
    }
    
  }
  submitMovies(){
    this.allmovieService.createPelicula(this.pelicula)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/all-movies']);
      },
      err => console.log(err)
    )
  }
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

