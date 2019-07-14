import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2992Component } from './page2992.component';

@NgModule({
  declarations: [Page2992Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2992Component }])],
  exports: [Page2992Component]
})
export class Page2992Module {}
