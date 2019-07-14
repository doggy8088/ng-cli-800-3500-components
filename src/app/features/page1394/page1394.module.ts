import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1394Component } from './page1394.component';

@NgModule({
  declarations: [Page1394Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1394Component }])],
  exports: [Page1394Component]
})
export class Page1394Module {}
