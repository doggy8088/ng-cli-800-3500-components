import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2798Component } from './page2798.component';

@NgModule({
  declarations: [Page2798Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2798Component }])],
  exports: [Page2798Component]
})
export class Page2798Module {}
