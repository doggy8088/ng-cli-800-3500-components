import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1578Component } from './page1578.component';

@NgModule({
  declarations: [Page1578Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1578Component }])],
  exports: [Page1578Component]
})
export class Page1578Module {}
