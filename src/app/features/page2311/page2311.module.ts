import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2311Component } from './page2311.component';

@NgModule({
  declarations: [Page2311Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2311Component }])],
  exports: [Page2311Component]
})
export class Page2311Module {}
