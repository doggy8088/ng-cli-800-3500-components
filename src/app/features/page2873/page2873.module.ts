import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2873Component } from './page2873.component';

@NgModule({
  declarations: [Page2873Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2873Component }])],
  exports: [Page2873Component]
})
export class Page2873Module {}
