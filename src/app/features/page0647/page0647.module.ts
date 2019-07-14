import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0647Component } from './page0647.component';

@NgModule({
  declarations: [Page0647Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0647Component }])],
  exports: [Page0647Component]
})
export class Page0647Module {}
