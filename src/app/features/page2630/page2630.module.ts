import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2630Component } from './page2630.component';

@NgModule({
  declarations: [Page2630Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2630Component }])],
  exports: [Page2630Component]
})
export class Page2630Module {}
