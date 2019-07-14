import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0952Component } from './page0952.component';

@NgModule({
  declarations: [Page0952Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0952Component }])],
  exports: [Page0952Component]
})
export class Page0952Module {}
