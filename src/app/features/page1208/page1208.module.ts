import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1208Component } from './page1208.component';

@NgModule({
  declarations: [Page1208Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1208Component }])],
  exports: [Page1208Component]
})
export class Page1208Module {}
