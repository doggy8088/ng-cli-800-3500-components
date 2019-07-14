import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3310Component } from './page3310.component';

@NgModule({
  declarations: [Page3310Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3310Component }])],
  exports: [Page3310Component]
})
export class Page3310Module {}
