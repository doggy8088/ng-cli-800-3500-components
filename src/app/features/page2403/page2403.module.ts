import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2403Component } from './page2403.component';

@NgModule({
  declarations: [Page2403Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2403Component }])],
  exports: [Page2403Component]
})
export class Page2403Module {}
