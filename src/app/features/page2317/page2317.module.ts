import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2317Component } from './page2317.component';

@NgModule({
  declarations: [Page2317Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2317Component }])],
  exports: [Page2317Component]
})
export class Page2317Module {}
