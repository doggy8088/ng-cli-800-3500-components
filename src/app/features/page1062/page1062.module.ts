import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1062Component } from './page1062.component';

@NgModule({
  declarations: [Page1062Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1062Component }])],
  exports: [Page1062Component]
})
export class Page1062Module {}
