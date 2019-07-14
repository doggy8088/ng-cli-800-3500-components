import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2496Component } from './page2496.component';

@NgModule({
  declarations: [Page2496Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2496Component }])],
  exports: [Page2496Component]
})
export class Page2496Module {}
