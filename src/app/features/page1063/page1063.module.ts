import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1063Component } from './page1063.component';

@NgModule({
  declarations: [Page1063Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1063Component }])],
  exports: [Page1063Component]
})
export class Page1063Module {}
