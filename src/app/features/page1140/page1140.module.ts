import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1140Component } from './page1140.component';

@NgModule({
  declarations: [Page1140Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1140Component }])],
  exports: [Page1140Component]
})
export class Page1140Module {}
