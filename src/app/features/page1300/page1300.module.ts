import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1300Component } from './page1300.component';

@NgModule({
  declarations: [Page1300Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1300Component }])],
  exports: [Page1300Component]
})
export class Page1300Module {}
