import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2487Component } from './page2487.component';

@NgModule({
  declarations: [Page2487Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2487Component }])],
  exports: [Page2487Component]
})
export class Page2487Module {}
