import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0470Component } from './page0470.component';

@NgModule({
  declarations: [Page0470Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0470Component }])],
  exports: [Page0470Component]
})
export class Page0470Module {}
