import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2567Component } from './page2567.component';

@NgModule({
  declarations: [Page2567Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2567Component }])],
  exports: [Page2567Component]
})
export class Page2567Module {}
