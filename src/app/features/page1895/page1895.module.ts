import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1895Component } from './page1895.component';

@NgModule({
  declarations: [Page1895Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1895Component }])],
  exports: [Page1895Component]
})
export class Page1895Module {}
