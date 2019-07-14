import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3367Component } from './page3367.component';

@NgModule({
  declarations: [Page3367Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3367Component }])],
  exports: [Page3367Component]
})
export class Page3367Module {}
