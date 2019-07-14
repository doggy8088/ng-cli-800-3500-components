import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1056Component } from './page1056.component';

@NgModule({
  declarations: [Page1056Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1056Component }])],
  exports: [Page1056Component]
})
export class Page1056Module {}
