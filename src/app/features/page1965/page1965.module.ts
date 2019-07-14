import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1965Component } from './page1965.component';

@NgModule({
  declarations: [Page1965Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1965Component }])],
  exports: [Page1965Component]
})
export class Page1965Module {}
