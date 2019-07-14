import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2003Component } from './page2003.component';

@NgModule({
  declarations: [Page2003Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2003Component }])],
  exports: [Page2003Component]
})
export class Page2003Module {}
