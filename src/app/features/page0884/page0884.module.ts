import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0884Component } from './page0884.component';

@NgModule({
  declarations: [Page0884Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0884Component }])],
  exports: [Page0884Component]
})
export class Page0884Module {}
