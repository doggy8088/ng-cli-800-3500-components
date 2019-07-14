import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1280Component } from './page1280.component';

@NgModule({
  declarations: [Page1280Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1280Component }])],
  exports: [Page1280Component]
})
export class Page1280Module {}
