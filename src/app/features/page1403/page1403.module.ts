import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1403Component } from './page1403.component';

@NgModule({
  declarations: [Page1403Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1403Component }])],
  exports: [Page1403Component]
})
export class Page1403Module {}
