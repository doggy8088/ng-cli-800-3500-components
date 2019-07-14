import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0557Component } from './page0557.component';

@NgModule({
  declarations: [Page0557Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0557Component }])],
  exports: [Page0557Component]
})
export class Page0557Module {}
