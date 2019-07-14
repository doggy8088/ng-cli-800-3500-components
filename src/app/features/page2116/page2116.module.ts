import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2116Component } from './page2116.component';

@NgModule({
  declarations: [Page2116Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2116Component }])],
  exports: [Page2116Component]
})
export class Page2116Module {}
