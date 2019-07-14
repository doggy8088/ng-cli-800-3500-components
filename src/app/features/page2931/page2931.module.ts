import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2931Component } from './page2931.component';

@NgModule({
  declarations: [Page2931Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2931Component }])],
  exports: [Page2931Component]
})
export class Page2931Module {}
