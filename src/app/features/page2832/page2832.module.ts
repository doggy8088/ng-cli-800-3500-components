import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2832Component } from './page2832.component';

@NgModule({
  declarations: [Page2832Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2832Component }])],
  exports: [Page2832Component]
})
export class Page2832Module {}
