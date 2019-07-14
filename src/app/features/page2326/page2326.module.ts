import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2326Component } from './page2326.component';

@NgModule({
  declarations: [Page2326Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2326Component }])],
  exports: [Page2326Component]
})
export class Page2326Module {}
