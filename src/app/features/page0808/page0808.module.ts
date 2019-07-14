import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0808Component } from './page0808.component';

@NgModule({
  declarations: [Page0808Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0808Component }])],
  exports: [Page0808Component]
})
export class Page0808Module {}
