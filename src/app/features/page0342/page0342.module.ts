import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0342Component } from './page0342.component';

@NgModule({
  declarations: [Page0342Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0342Component }])],
  exports: [Page0342Component]
})
export class Page0342Module {}
