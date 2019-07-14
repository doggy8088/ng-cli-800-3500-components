import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2615Component } from './page2615.component';

@NgModule({
  declarations: [Page2615Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2615Component }])],
  exports: [Page2615Component]
})
export class Page2615Module {}
