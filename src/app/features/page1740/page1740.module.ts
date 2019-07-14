import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1740Component } from './page1740.component';

@NgModule({
  declarations: [Page1740Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1740Component }])],
  exports: [Page1740Component]
})
export class Page1740Module {}
