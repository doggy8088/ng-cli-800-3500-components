import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1331Component } from './page1331.component';

@NgModule({
  declarations: [Page1331Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1331Component }])],
  exports: [Page1331Component]
})
export class Page1331Module {}
