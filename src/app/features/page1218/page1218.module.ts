import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1218Component } from './page1218.component';

@NgModule({
  declarations: [Page1218Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1218Component }])],
  exports: [Page1218Component]
})
export class Page1218Module {}
