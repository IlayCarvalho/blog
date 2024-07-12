import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { AboutComponent } from './components/conteudo/about/about.component';
import { BlogComponent } from './components/conteudo/blog/blog.component';
import { FormComponent } from './components/form/form.component';

export const routes: Routes = [
    { path: "", component: MainComponent },
    { path: "sobre", component: AboutComponent},
    { path: "main", component: MainComponent},
    { path: "form", component: FormComponent}
];
