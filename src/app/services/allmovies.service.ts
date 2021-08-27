import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { peliculas } from '../entidades/peliculas';


const httpOptions = {
  headers: new HttpHeaders({ 
    'Access-Control-Allow-Origin':'*',
    'Authorization':'authkey',
    'userid':'1'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AllmoviesService {





  base: string = 'http://localhost:3000';

  constructor(private http: HttpClient,
                private activatedRoiuter:ActivatedRoute) { 
    
  }

  getReservacions(): Observable<peliculas[]>{
    return this.http.get<peliculas[]>(this.base +'/peliculas/todas', httpOptions);
  }
  getReservacion(id: string): Observable<peliculas>{
    return this.http.get<peliculas>(this.base +'/peliculas/${id}', httpOptions)
  }
  createReservacion(pelicula: peliculas): Observable<peliculas>{
    return this.http.post<peliculas>(this.base +'/peliculas/create', pelicula, httpOptions)
  }
    
  updateReservacion(id: string, pelicula: peliculas): Observable<peliculas>{
    return this.http.put<peliculas>('/peliculas/editar/${id}', pelicula)
  }
  deleteReservacion(id: string ): Observable<peliculas>{
    return this.http.delete<peliculas>('/peliculas/eliminar/${id}')
  }
}
