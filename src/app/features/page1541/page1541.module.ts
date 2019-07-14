import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1541Component } from './page1541.component';

@NgModule({
  declarations: [Page1541Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1541Component }])],
  exports: [Page1541Component]
})
export class Page1541Module {}
