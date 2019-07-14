import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2650Component } from './page2650.component';

@NgModule({
  declarations: [Page2650Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2650Component }])],
  exports: [Page2650Component]
})
export class Page2650Module {}
