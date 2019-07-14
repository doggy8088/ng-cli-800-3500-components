import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1750Component } from './page1750.component';

@NgModule({
  declarations: [Page1750Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1750Component }])],
  exports: [Page1750Component]
})
export class Page1750Module {}
