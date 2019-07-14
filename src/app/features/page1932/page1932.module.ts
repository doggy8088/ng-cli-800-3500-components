import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1932Component } from './page1932.component';

@NgModule({
  declarations: [Page1932Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1932Component }])],
  exports: [Page1932Component]
})
export class Page1932Module {}
