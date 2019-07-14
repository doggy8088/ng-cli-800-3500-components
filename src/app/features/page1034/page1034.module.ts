import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1034Component } from './page1034.component';

@NgModule({
  declarations: [Page1034Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1034Component }])],
  exports: [Page1034Component]
})
export class Page1034Module {}
