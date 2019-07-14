import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0495Component } from './page0495.component';

@NgModule({
  declarations: [Page0495Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0495Component }])],
  exports: [Page0495Component]
})
export class Page0495Module {}
