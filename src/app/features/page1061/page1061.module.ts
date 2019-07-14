import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1061Component } from './page1061.component';

@NgModule({
  declarations: [Page1061Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1061Component }])],
  exports: [Page1061Component]
})
export class Page1061Module {}
