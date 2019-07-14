import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2475Component } from './page2475.component';

@NgModule({
  declarations: [Page2475Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2475Component }])],
  exports: [Page2475Component]
})
export class Page2475Module {}
