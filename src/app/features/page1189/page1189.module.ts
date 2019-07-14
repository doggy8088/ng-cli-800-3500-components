import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1189Component } from './page1189.component';

@NgModule({
  declarations: [Page1189Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1189Component }])],
  exports: [Page1189Component]
})
export class Page1189Module {}
