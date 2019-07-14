import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1758Component } from './page1758.component';

@NgModule({
  declarations: [Page1758Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1758Component }])],
  exports: [Page1758Component]
})
export class Page1758Module {}
