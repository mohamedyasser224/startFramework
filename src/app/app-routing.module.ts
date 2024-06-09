import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { PilotPageComponent } from './components/pilot-page/pilot-page.component';

const routes: Routes = [
{path:"", component:PilotPageComponent},
{path:"about", component:AboutComponent},
{path:"portfolio", component:PortfolioComponent},
{path:"contact", component:ContactComponent},
{path:"**", component:NotFoundPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
