import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1032Component } from './page1032.component';

@NgModule({
  declarations: [Page1032Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1032Component }])],
  exports: [Page1032Component]
})
export class Page1032Module {}
