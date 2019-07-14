import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3136Component } from './page3136.component';

@NgModule({
  declarations: [Page3136Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3136Component }])],
  exports: [Page3136Component]
})
export class Page3136Module {}
