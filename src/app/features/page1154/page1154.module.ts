import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1154Component } from './page1154.component';

@NgModule({
  declarations: [Page1154Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1154Component }])],
  exports: [Page1154Component]
})
export class Page1154Module {}
