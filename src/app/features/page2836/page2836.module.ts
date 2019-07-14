import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2836Component } from './page2836.component';

@NgModule({
  declarations: [Page2836Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2836Component }])],
  exports: [Page2836Component]
})
export class Page2836Module {}
