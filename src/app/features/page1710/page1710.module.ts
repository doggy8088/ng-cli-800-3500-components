import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1710Component } from './page1710.component';

@NgModule({
  declarations: [Page1710Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1710Component }])],
  exports: [Page1710Component]
})
export class Page1710Module {}
