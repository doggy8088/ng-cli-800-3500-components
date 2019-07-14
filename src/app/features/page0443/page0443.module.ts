import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0443Component } from './page0443.component';

@NgModule({
  declarations: [Page0443Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0443Component }])],
  exports: [Page0443Component]
})
export class Page0443Module {}
