import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1768Component } from './page1768.component';

@NgModule({
  declarations: [Page1768Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1768Component }])],
  exports: [Page1768Component]
})
export class Page1768Module {}
