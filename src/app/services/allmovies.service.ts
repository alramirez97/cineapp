import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { detalles } from '../entidades/detalles';
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

  getPeliculas(): Observable<peliculas[]>{
    return this.http.get<peliculas[]>(this.base +'/peliculas/todas', httpOptions);
  }
  getDetalle(): Observable<detalles[]>{
    return this.http.get<detalles[]>(this.base+'/detalle/todos', httpOptions);
  };
  getPelicula(id: string | undefined): Observable<peliculas>{
    return this.http.get<peliculas>(this.base +'/peliculas/uno/' + id, httpOptions)
  }
  createPelicula(pelicula: peliculas): Observable<peliculas>{
    return this.http.post<peliculas>(this.base +'/peliculas/create', pelicula, httpOptions)
  }
    
  updatePelicula(id: string | undefined, pelicula: peliculas): Observable<peliculas>{
    return this.http.put<peliculas>(this.base + '/peliculas/editar/' + id, pelicula)
  }
  deletePelicula(id: string | undefined ): Observable<peliculas>{
    console.log(id);
    return this.http.delete<peliculas>(this.base +'/peliculas/eliminar/'+ id)
  }
}
