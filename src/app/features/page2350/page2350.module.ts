import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2350Component } from './page2350.component';

@NgModule({
  declarations: [Page2350Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2350Component }])],
  exports: [Page2350Component]
})
export class Page2350Module {}
