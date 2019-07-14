import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2135Component } from './page2135.component';

@NgModule({
  declarations: [Page2135Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2135Component }])],
  exports: [Page2135Component]
})
export class Page2135Module {}
