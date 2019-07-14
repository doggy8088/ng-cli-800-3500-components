import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0161Component } from './page0161.component';

@NgModule({
  declarations: [Page0161Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0161Component }])],
  exports: [Page0161Component]
})
export class Page0161Module {}
