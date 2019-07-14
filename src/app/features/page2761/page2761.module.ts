import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2761Component } from './page2761.component';

@NgModule({
  declarations: [Page2761Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2761Component }])],
  exports: [Page2761Component]
})
export class Page2761Module {}
