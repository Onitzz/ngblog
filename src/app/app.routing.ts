import { Route } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { BlogComponent } from './pages/blog/blog.component';
import { FormComponent } from './pages/blog/form.component';


const routes: Route[] = [
    { path: '', component: HomeComponent},
    { path: 'about', component: AboutComponent},
    { path: 'blog/add', component: FormComponent},
    { path: 'blog', component: BlogComponent}
];

export default routes;