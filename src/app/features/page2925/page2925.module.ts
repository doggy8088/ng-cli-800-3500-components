import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2925Component } from './page2925.component';

@NgModule({
  declarations: [Page2925Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2925Component }])],
  exports: [Page2925Component]
})
export class Page2925Module {}
