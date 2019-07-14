import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1631Component } from './page1631.component';

@NgModule({
  declarations: [Page1631Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1631Component }])],
  exports: [Page1631Component]
})
export class Page1631Module {}
