import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2571Component } from './page2571.component';

@NgModule({
  declarations: [Page2571Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2571Component }])],
  exports: [Page2571Component]
})
export class Page2571Module {}
