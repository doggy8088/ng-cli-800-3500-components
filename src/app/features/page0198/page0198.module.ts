import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0198Component } from './page0198.component';

@NgModule({
  declarations: [Page0198Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0198Component }])],
  exports: [Page0198Component]
})
export class Page0198Module {}
