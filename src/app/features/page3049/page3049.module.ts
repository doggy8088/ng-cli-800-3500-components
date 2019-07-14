import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3049Component } from './page3049.component';

@NgModule({
  declarations: [Page3049Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3049Component }])],
  exports: [Page3049Component]
})
export class Page3049Module {}
