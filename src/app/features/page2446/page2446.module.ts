import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2446Component } from './page2446.component';

@NgModule({
  declarations: [Page2446Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2446Component }])],
  exports: [Page2446Component]
})
export class Page2446Module {}
