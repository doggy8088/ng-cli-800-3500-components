import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1738Component } from './page1738.component';

@NgModule({
  declarations: [Page1738Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1738Component }])],
  exports: [Page1738Component]
})
export class Page1738Module {}
