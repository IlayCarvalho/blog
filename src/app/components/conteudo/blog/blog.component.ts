import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Post } from '../../../Post';
import { PostService } from '../../../services/post.service';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [
    RouterLink,
    NgFor
  ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {

  protected listaPost: Post[] = []

  constructor( private service: PostService ){
    this.lendoPost();
  }

  lendoPost() {
    return this.service.listaPost().subscribe( lista => this.listaPost = lista)
  }

  async excluir(id: number) {
    await this.service.deletarPost(id).subscribe(() => {
      this.lendoPost()
    })
  }
}
