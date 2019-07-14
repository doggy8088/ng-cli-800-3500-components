import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2845Component } from './page2845.component';

@NgModule({
  declarations: [Page2845Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2845Component }])],
  exports: [Page2845Component]
})
export class Page2845Module {}
