import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3451Component } from './page3451.component';

@NgModule({
  declarations: [Page3451Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3451Component }])],
  exports: [Page3451Component]
})
export class Page3451Module {}
