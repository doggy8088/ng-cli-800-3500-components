import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0804Component } from './page0804.component';

@NgModule({
  declarations: [Page0804Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0804Component }])],
  exports: [Page0804Component]
})
export class Page0804Module {}
