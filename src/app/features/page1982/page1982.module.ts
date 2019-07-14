import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1982Component } from './page1982.component';

@NgModule({
  declarations: [Page1982Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1982Component }])],
  exports: [Page1982Component]
})
export class Page1982Module {}
