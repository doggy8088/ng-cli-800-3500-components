import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2273Component } from './page2273.component';

@NgModule({
  declarations: [Page2273Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2273Component }])],
  exports: [Page2273Component]
})
export class Page2273Module {}
