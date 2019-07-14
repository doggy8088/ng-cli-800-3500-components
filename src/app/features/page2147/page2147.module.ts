import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2147Component } from './page2147.component';

@NgModule({
  declarations: [Page2147Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2147Component }])],
  exports: [Page2147Component]
})
export class Page2147Module {}
