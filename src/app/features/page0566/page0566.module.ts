import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0566Component } from './page0566.component';

@NgModule({
  declarations: [Page0566Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0566Component }])],
  exports: [Page0566Component]
})
export class Page0566Module {}
