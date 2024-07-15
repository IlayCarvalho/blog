import { NgIf } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { PostService } from '../../services/post.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Post } from '../../Post';

@Component({
  selector: 'app-form-at',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
  ],
  templateUrl: './form-at.component.html',
  styleUrl: './form-at.component.css'
})
export class FormAtComponent implements OnInit {

  protected formBuilderService = inject(FormBuilder);

  protected dados: Post = {
    id: 0,
    titulo: '',
    descricao: '',
  }
 
  protected formAt = this.formBuilderService.group({
    titulo: ['', Validators.required],
    descricao: ['', Validators.required]
  });

  constructor( 
    private editarPostService: PostService, 
    private router: Router, 
    private routes: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id: number = Number(this.routes.snapshot.paramMap.get("id"));

    this.editarPostService.buscaPost(id).subscribe( post => this.dados = post);
  }

  async editar() {

    if(this.formAt.invalid) {
      return ;
    };

    const dadosPost = {
      titulo: this.formAt.value.titulo!,
      descricao: this.formAt.value.descricao!,
    };

    const id: number = Number(this.routes.snapshot.paramMap.get("id"));

    await this.editarPostService.atualizarPost(id, dadosPost).subscribe(() => {
      this.router.navigate(['/'])
    })

  }

}
