import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0321Component } from './page0321.component';

@NgModule({
  declarations: [Page0321Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0321Component }])],
  exports: [Page0321Component]
})
export class Page0321Module {}
