import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0726Component } from './page0726.component';

@NgModule({
  declarations: [Page0726Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0726Component }])],
  exports: [Page0726Component]
})
export class Page0726Module {}
