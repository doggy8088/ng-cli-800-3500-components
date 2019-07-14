import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2439Component } from './page2439.component';

@NgModule({
  declarations: [Page2439Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2439Component }])],
  exports: [Page2439Component]
})
export class Page2439Module {}
