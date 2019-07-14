import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1514Component } from './page1514.component';

@NgModule({
  declarations: [Page1514Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1514Component }])],
  exports: [Page1514Component]
})
export class Page1514Module {}
