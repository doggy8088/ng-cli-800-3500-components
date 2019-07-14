import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0721Component } from './page0721.component';

@NgModule({
  declarations: [Page0721Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0721Component }])],
  exports: [Page0721Component]
})
export class Page0721Module {}
