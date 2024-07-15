import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  protected url: string = "http://localhost:8080/api/blog";

  constructor(private http: HttpClient) { };

  public listaPost(): Observable<Post[]> {
    return this.http.get<Post[]>(this.url);
  };

  public criarPost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.url, post);
  };

  public deletarPost(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  };

  public atualizarPost(id: number, post: Post) {

    const urlP: string = `${this.url}/${id}`;

    return this.http.put(urlP, post);
  };

  public buscaPost(id: number): Observable<Post> {
    
    const urlP: string = `${this.url}/${id}`;

    return this.http.get<Post>(urlP);
  }
}
