import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1852Component } from './page1852.component';

@NgModule({
  declarations: [Page1852Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1852Component }])],
  exports: [Page1852Component]
})
export class Page1852Module {}
