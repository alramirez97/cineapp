import { Component, Injectable, OnInit } from '@angular/core';
import { peliculas } from '../entidades/peliculas';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Console } from 'console';
import { AllmoviesService } from '../services/allmovies.service';
/*
const httpOptions = {
  headers: new HttpHeaders({ 
    'Access-Control-Allow-Origin':'*',
    'Authorization':'authkey',
    'userid':'1'
  })
};
@Injectable({
  providedIn: 'root'
})*/
@Component({
  selector: 'app-allmovies',
  templateUrl: './allmovies.component.html',
  styleUrls: ['./allmovies.component.sass']
})
export class AllmoviesComponent implements OnInit {
  peliculas: peliculas[] = [];

  constructor(private peliculaService: AllmoviesService) { }

  ngOnInit(): void {
    this.getPeliculas();
  }
  
  getPeliculas(){
    this.peliculaService.getPeliculas()
    .subscribe(
      (res :peliculas[]) => {
        console.log(res);
        this.peliculas = res ;
      },
      err => console.log(err),
    )
  }

  deletePelicula(id: string | undefined){

    this.peliculaService.deletePelicula(id)
    .subscribe(
      res => {
        this.getPeliculas();
      },
      err => console.log(err)
    )
  }

}
