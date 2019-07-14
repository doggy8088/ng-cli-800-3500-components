import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1246Component } from './page1246.component';

@NgModule({
  declarations: [Page1246Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1246Component }])],
  exports: [Page1246Component]
})
export class Page1246Module {}
