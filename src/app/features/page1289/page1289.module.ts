import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1289Component } from './page1289.component';

@NgModule({
  declarations: [Page1289Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1289Component }])],
  exports: [Page1289Component]
})
export class Page1289Module {}
