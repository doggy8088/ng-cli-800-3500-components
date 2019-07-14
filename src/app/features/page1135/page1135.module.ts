import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1135Component } from './page1135.component';

@NgModule({
  declarations: [Page1135Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1135Component }])],
  exports: [Page1135Component]
})
export class Page1135Module {}
