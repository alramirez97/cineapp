import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { peliculas } from '../entidades/peliculas';
import { AllmoviesService } from '../services/allmovies.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { detalles } from '../entidades/detalles';

@Component({
  selector: 'app-addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.sass'],
  providers: [AllmoviesService]
})
export class AddmovieComponent implements OnInit {

  detalle: detalles[] = [];
  
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
    private formBuilder: FormBuilder
    ) {
      //this.getDetalle();

    

      this.miFormulario = new FormGroup({

        'titulo' : new FormControl('',[Validators.required,Validators.minLength(2)]),
        'duracion': new FormControl('',[Validators.required,Validators.maxLength(15)]),
        'clasificacion':  new FormControl('',[Validators.required,Validators.maxLength(1)]),
        'imagen': new FormControl('',),
        'genero': new FormControl('',),
        'estatus': new FormControl('',),
        'fechaEstreno': new FormControl('',),
        'detalle_id': new FormControl('',)
      });
      console.log(this.miFormulario.value);

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
  submitMovies(){
    this.allmovieService.createPelicula(this.miFormulario.value)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/all-movies']);
      },
      err => console.log(err)
    )
  }
  updatePelicula(){
  
    this.allmovieService.updatePelicula(this.pelicula._id, this.miFormulario.value)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/all-movies'])
      },
      err => console.log(err)
    )
  }

}

