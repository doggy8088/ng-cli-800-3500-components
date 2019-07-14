import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2610Component } from './page2610.component';

@NgModule({
  declarations: [Page2610Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2610Component }])],
  exports: [Page2610Component]
})
export class Page2610Module {}
