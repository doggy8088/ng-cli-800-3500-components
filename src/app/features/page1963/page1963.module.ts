import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1963Component } from './page1963.component';

@NgModule({
  declarations: [Page1963Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1963Component }])],
  exports: [Page1963Component]
})
export class Page1963Module {}
