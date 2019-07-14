import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2697Component } from './page2697.component';

@NgModule({
  declarations: [Page2697Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2697Component }])],
  exports: [Page2697Component]
})
export class Page2697Module {}
