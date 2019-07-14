import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3250Component } from './page3250.component';

@NgModule({
  declarations: [Page3250Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3250Component }])],
  exports: [Page3250Component]
})
export class Page3250Module {}
