import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1042Component } from './page1042.component';

@NgModule({
  declarations: [Page1042Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1042Component }])],
  exports: [Page1042Component]
})
export class Page1042Module {}
