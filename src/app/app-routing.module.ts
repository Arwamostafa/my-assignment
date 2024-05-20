import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  {path:"", redirectTo:"home", pathMatch:"full"},
  {path:"nav", component : NavComponent},
  {path:"home", component : HomeComponent, title:"Home"},
  {path:"about", component : AboutComponent,title:"About"},
  {path:"portfolio", component : PortfolioComponent, title:"Portfolio"},
  {path:"contact", component : ContactComponent, title:"Contact"},
  {path:"footer", component : FooterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
