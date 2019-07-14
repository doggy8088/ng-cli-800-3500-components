import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2470Component } from './page2470.component';

@NgModule({
  declarations: [Page2470Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2470Component }])],
  exports: [Page2470Component]
})
export class Page2470Module {}
