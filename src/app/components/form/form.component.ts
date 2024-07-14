import { NgIf } from '@angular/common';
import { Component, inject} from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { PostService } from '../../services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  private formBuilderSetvice = inject(FormBuilder)

  protected form = this.formBuilderSetvice.group({
    titulo: ['', Validators.required],
    descricao: ['', Validators.required]
  })

  constructor( private cadastrarPost: PostService, private router: Router){}
  
  async cadastrar() {
    if(this.form.invalid) {
      return ;
    }

    const dadosPost = {
      titulo: this.form.value.titulo!,
      descricao: this.form.value.descricao!,
    }

    await this.cadastrarPost.criarPost(dadosPost).subscribe(() => {
      this.router.navigate(['/'])
    })

    this.form.reset()
  }

}
