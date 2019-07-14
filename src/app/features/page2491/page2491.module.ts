import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2491Component } from './page2491.component';

@NgModule({
  declarations: [Page2491Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2491Component }])],
  exports: [Page2491Component]
})
export class Page2491Module {}
