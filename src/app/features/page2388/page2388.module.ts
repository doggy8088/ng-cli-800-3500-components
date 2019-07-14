import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2388Component } from './page2388.component';

@NgModule({
  declarations: [Page2388Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2388Component }])],
  exports: [Page2388Component]
})
export class Page2388Module {}
