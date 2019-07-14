import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1971Component } from './page1971.component';

@NgModule({
  declarations: [Page1971Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1971Component }])],
  exports: [Page1971Component]
})
export class Page1971Module {}
