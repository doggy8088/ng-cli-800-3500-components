import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1075Component } from './page1075.component';

@NgModule({
  declarations: [Page1075Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1075Component }])],
  exports: [Page1075Component]
})
export class Page1075Module {}
