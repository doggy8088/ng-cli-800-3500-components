import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3023Component } from './page3023.component';

@NgModule({
  declarations: [Page3023Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3023Component }])],
  exports: [Page3023Component]
})
export class Page3023Module {}
