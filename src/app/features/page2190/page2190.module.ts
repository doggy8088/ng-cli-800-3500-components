import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2190Component } from './page2190.component';

@NgModule({
  declarations: [Page2190Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2190Component }])],
  exports: [Page2190Component]
})
export class Page2190Module {}
