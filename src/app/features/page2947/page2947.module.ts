import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2947Component } from './page2947.component';

@NgModule({
  declarations: [Page2947Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2947Component }])],
  exports: [Page2947Component]
})
export class Page2947Module {}
