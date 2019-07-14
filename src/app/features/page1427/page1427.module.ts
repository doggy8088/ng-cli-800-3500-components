import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1427Component } from './page1427.component';

@NgModule({
  declarations: [Page1427Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1427Component }])],
  exports: [Page1427Component]
})
export class Page1427Module {}
