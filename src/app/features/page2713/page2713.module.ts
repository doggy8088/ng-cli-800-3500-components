import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2713Component } from './page2713.component';

@NgModule({
  declarations: [Page2713Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2713Component }])],
  exports: [Page2713Component]
})
export class Page2713Module {}
