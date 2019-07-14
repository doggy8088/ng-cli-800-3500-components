import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2789Component } from './page2789.component';

@NgModule({
  declarations: [Page2789Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2789Component }])],
  exports: [Page2789Component]
})
export class Page2789Module {}
