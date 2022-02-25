import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DesignComponent } from './pages/design/design.component';
import { DocumentationComponent } from './pages/documentation/documentation.component';
import { ItemComponent } from './pages/item/item.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { SearchComponent } from './pages/search/search.component';

const routes: Routes = [
  {path:'home',component:PortafolioComponent},
  {path:'about',component:AboutComponent},
  {path:'item/:id',component:ItemComponent},
  {path:'search/:termino',component:SearchComponent},
  {path:'blog',component:BlogComponent},
  {path:'documentation',component:DocumentationComponent},
  {path:'design',component:DesignComponent},
  {path:'contact',component:ContactComponent},
  {path:'**',pathMatch:'full', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
