import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1698Component } from './page1698.component';

@NgModule({
  declarations: [Page1698Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1698Component }])],
  exports: [Page1698Component]
})
export class Page1698Module {}
