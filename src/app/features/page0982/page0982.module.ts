import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0982Component } from './page0982.component';

@NgModule({
  declarations: [Page0982Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0982Component }])],
  exports: [Page0982Component]
})
export class Page0982Module {}
