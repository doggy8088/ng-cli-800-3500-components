import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3140Component } from './page3140.component';

@NgModule({
  declarations: [Page3140Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3140Component }])],
  exports: [Page3140Component]
})
export class Page3140Module {}
