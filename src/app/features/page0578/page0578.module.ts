import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0578Component } from './page0578.component';

@NgModule({
  declarations: [Page0578Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0578Component }])],
  exports: [Page0578Component]
})
export class Page0578Module {}
