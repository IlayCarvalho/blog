import { Component } from '@angular/core';
import { BlogComponent } from '../conteudo/blog/blog.component';
import { AboutComponent } from '../conteudo/about/about.component';
import { ContatoComponent } from '../conteudo/contato/contato.component';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    BlogComponent,
    AboutComponent,
    ContatoComponent,
    FooterComponent,
    RouterLink
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
