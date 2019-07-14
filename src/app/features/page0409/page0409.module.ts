import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0409Component } from './page0409.component';

@NgModule({
  declarations: [Page0409Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0409Component }])],
  exports: [Page0409Component]
})
export class Page0409Module {}
