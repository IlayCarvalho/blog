import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  protected url: string = "http://localhost:8080/api/blog";

  constructor(private http: HttpClient) { }

  listaPost(): Observable<Post[]> {
    return this.http.get<Post[]>(this.url)
  }

  criarPost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.url, post)
  }

  deletarPost(id: number) {
    return this.http.delete(`${this.url}/${id}`)
  }
}
