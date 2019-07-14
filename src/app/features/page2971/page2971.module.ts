import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2971Component } from './page2971.component';

@NgModule({
  declarations: [Page2971Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2971Component }])],
  exports: [Page2971Component]
})
export class Page2971Module {}
