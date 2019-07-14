import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1256Component } from './page1256.component';

@NgModule({
  declarations: [Page1256Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1256Component }])],
  exports: [Page1256Component]
})
export class Page1256Module {}
