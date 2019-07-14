import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1182Component } from './page1182.component';

@NgModule({
  declarations: [Page1182Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1182Component }])],
  exports: [Page1182Component]
})
export class Page1182Module {}
