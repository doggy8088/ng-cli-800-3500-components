import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2796Component } from './page2796.component';

@NgModule({
  declarations: [Page2796Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2796Component }])],
  exports: [Page2796Component]
})
export class Page2796Module {}
