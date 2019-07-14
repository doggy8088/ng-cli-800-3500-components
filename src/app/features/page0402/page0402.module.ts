import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0402Component } from './page0402.component';

@NgModule({
  declarations: [Page0402Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0402Component }])],
  exports: [Page0402Component]
})
export class Page0402Module {}
