import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2820Component } from './page2820.component';

@NgModule({
  declarations: [Page2820Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2820Component }])],
  exports: [Page2820Component]
})
export class Page2820Module {}
