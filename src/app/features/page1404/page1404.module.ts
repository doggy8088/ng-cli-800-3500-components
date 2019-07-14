import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1404Component } from './page1404.component';

@NgModule({
  declarations: [Page1404Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1404Component }])],
  exports: [Page1404Component]
})
export class Page1404Module {}
