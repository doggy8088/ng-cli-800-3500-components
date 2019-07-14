import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2749Component } from './page2749.component';

@NgModule({
  declarations: [Page2749Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2749Component }])],
  exports: [Page2749Component]
})
export class Page2749Module {}
