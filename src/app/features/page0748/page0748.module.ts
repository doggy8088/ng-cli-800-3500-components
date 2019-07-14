import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0748Component } from './page0748.component';

@NgModule({
  declarations: [Page0748Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0748Component }])],
  exports: [Page0748Component]
})
export class Page0748Module {}
