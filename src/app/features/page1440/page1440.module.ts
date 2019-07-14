import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1440Component } from './page1440.component';

@NgModule({
  declarations: [Page1440Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1440Component }])],
  exports: [Page1440Component]
})
export class Page1440Module {}
