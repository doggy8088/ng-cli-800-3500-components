import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1201Component } from './page1201.component';

@NgModule({
  declarations: [Page1201Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1201Component }])],
  exports: [Page1201Component]
})
export class Page1201Module {}
