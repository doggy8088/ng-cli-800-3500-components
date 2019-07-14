import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1726Component } from './page1726.component';

@NgModule({
  declarations: [Page1726Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1726Component }])],
  exports: [Page1726Component]
})
export class Page1726Module {}
