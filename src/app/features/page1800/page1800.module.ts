import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1800Component } from './page1800.component';

@NgModule({
  declarations: [Page1800Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1800Component }])],
  exports: [Page1800Component]
})
export class Page1800Module {}
