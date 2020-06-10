import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CeditCardComponent } from './cedit-card/cedit-card.component';


const routes: Routes = [
  { path: 'credit-card', component: ContactFormComponent },
  { path: 'contact-form', component: CeditCardComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
