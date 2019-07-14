import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2023Component } from './page2023.component';

@NgModule({
  declarations: [Page2023Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2023Component }])],
  exports: [Page2023Component]
})
export class Page2023Module {}
