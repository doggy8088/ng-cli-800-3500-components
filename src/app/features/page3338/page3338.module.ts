import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3338Component } from './page3338.component';

@NgModule({
  declarations: [Page3338Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3338Component }])],
  exports: [Page3338Component]
})
export class Page3338Module {}
