import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1134Component } from './page1134.component';

@NgModule({
  declarations: [Page1134Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1134Component }])],
  exports: [Page1134Component]
})
export class Page1134Module {}
