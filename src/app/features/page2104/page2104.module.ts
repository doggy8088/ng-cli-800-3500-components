import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2104Component } from './page2104.component';

@NgModule({
  declarations: [Page2104Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2104Component }])],
  exports: [Page2104Component]
})
export class Page2104Module {}
