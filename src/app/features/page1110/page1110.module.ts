import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1110Component } from './page1110.component';

@NgModule({
  declarations: [Page1110Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1110Component }])],
  exports: [Page1110Component]
})
export class Page1110Module {}
