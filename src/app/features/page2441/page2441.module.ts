import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2441Component } from './page2441.component';

@NgModule({
  declarations: [Page2441Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2441Component }])],
  exports: [Page2441Component]
})
export class Page2441Module {}
