import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1019Component } from './page1019.component';

@NgModule({
  declarations: [Page1019Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1019Component }])],
  exports: [Page1019Component]
})
export class Page1019Module {}
