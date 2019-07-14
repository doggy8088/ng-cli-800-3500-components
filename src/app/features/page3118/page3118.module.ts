import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3118Component } from './page3118.component';

@NgModule({
  declarations: [Page3118Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3118Component }])],
  exports: [Page3118Component]
})
export class Page3118Module {}
