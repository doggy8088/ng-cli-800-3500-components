import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2800Component } from './page2800.component';

@NgModule({
  declarations: [Page2800Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2800Component }])],
  exports: [Page2800Component]
})
export class Page2800Module {}
