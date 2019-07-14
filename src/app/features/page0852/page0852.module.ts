import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0852Component } from './page0852.component';

@NgModule({
  declarations: [Page0852Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0852Component }])],
  exports: [Page0852Component]
})
export class Page0852Module {}
