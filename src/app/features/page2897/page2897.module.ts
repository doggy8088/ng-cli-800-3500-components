import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2897Component } from './page2897.component';

@NgModule({
  declarations: [Page2897Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2897Component }])],
  exports: [Page2897Component]
})
export class Page2897Module {}
