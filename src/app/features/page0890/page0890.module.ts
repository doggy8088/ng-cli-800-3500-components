import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0890Component } from './page0890.component';

@NgModule({
  declarations: [Page0890Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0890Component }])],
  exports: [Page0890Component]
})
export class Page0890Module {}
