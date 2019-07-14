import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1357Component } from './page1357.component';

@NgModule({
  declarations: [Page1357Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1357Component }])],
  exports: [Page1357Component]
})
export class Page1357Module {}
