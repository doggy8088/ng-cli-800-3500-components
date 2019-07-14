import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1608Component } from './page1608.component';

@NgModule({
  declarations: [Page1608Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1608Component }])],
  exports: [Page1608Component]
})
export class Page1608Module {}
