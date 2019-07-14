import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1518Component } from './page1518.component';

@NgModule({
  declarations: [Page1518Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1518Component }])],
  exports: [Page1518Component]
})
export class Page1518Module {}
