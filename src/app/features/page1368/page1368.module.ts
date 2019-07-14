import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1368Component } from './page1368.component';

@NgModule({
  declarations: [Page1368Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1368Component }])],
  exports: [Page1368Component]
})
export class Page1368Module {}
