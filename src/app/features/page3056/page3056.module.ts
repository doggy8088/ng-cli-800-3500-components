import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3056Component } from './page3056.component';

@NgModule({
  declarations: [Page3056Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3056Component }])],
  exports: [Page3056Component]
})
export class Page3056Module {}
