import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1737Component } from './page1737.component';

@NgModule({
  declarations: [Page1737Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1737Component }])],
  exports: [Page1737Component]
})
export class Page1737Module {}
