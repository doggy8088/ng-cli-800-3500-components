import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0872Component } from './page0872.component';

@NgModule({
  declarations: [Page0872Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0872Component }])],
  exports: [Page0872Component]
})
export class Page0872Module {}
