import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1367Component } from './page1367.component';

@NgModule({
  declarations: [Page1367Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1367Component }])],
  exports: [Page1367Component]
})
export class Page1367Module {}
