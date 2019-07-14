import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1557Component } from './page1557.component';

@NgModule({
  declarations: [Page1557Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1557Component }])],
  exports: [Page1557Component]
})
export class Page1557Module {}
