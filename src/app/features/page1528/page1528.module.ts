import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1528Component } from './page1528.component';

@NgModule({
  declarations: [Page1528Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1528Component }])],
  exports: [Page1528Component]
})
export class Page1528Module {}
