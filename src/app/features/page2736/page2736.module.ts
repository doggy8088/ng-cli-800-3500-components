import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2736Component } from './page2736.component';

@NgModule({
  declarations: [Page2736Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2736Component }])],
  exports: [Page2736Component]
})
export class Page2736Module {}
