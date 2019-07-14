import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2142Component } from './page2142.component';

@NgModule({
  declarations: [Page2142Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2142Component }])],
  exports: [Page2142Component]
})
export class Page2142Module {}
