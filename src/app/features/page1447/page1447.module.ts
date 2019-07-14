import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1447Component } from './page1447.component';

@NgModule({
  declarations: [Page1447Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1447Component }])],
  exports: [Page1447Component]
})
export class Page1447Module {}
