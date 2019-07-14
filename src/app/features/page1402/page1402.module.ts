import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1402Component } from './page1402.component';

@NgModule({
  declarations: [Page1402Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1402Component }])],
  exports: [Page1402Component]
})
export class Page1402Module {}
