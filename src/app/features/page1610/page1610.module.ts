import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1610Component } from './page1610.component';

@NgModule({
  declarations: [Page1610Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1610Component }])],
  exports: [Page1610Component]
})
export class Page1610Module {}
