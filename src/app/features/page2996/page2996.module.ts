import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2996Component } from './page2996.component';

@NgModule({
  declarations: [Page2996Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2996Component }])],
  exports: [Page2996Component]
})
export class Page2996Module {}
