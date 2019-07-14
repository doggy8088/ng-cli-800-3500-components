import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1830Component } from './page1830.component';

@NgModule({
  declarations: [Page1830Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1830Component }])],
  exports: [Page1830Component]
})
export class Page1830Module {}
