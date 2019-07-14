import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2588Component } from './page2588.component';

@NgModule({
  declarations: [Page2588Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2588Component }])],
  exports: [Page2588Component]
})
export class Page2588Module {}
