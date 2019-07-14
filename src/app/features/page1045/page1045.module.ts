import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1045Component } from './page1045.component';

@NgModule({
  declarations: [Page1045Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1045Component }])],
  exports: [Page1045Component]
})
export class Page1045Module {}
