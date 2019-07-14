import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0067Component } from './page0067.component';

@NgModule({
  declarations: [Page0067Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0067Component }])],
  exports: [Page0067Component]
})
export class Page0067Module {}
