import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2280Component } from './page2280.component';

@NgModule({
  declarations: [Page2280Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2280Component }])],
  exports: [Page2280Component]
})
export class Page2280Module {}
