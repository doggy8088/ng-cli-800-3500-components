import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1531Component } from './page1531.component';

@NgModule({
  declarations: [Page1531Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1531Component }])],
  exports: [Page1531Component]
})
export class Page1531Module {}
