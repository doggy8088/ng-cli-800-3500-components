import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1190Component } from './page1190.component';

@NgModule({
  declarations: [Page1190Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1190Component }])],
  exports: [Page1190Component]
})
export class Page1190Module {}
