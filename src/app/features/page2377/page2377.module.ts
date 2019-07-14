import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2377Component } from './page2377.component';

@NgModule({
  declarations: [Page2377Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2377Component }])],
  exports: [Page2377Component]
})
export class Page2377Module {}
