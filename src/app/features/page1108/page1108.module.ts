import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1108Component } from './page1108.component';

@NgModule({
  declarations: [Page1108Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1108Component }])],
  exports: [Page1108Component]
})
export class Page1108Module {}
