import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3069Component } from './page3069.component';

@NgModule({
  declarations: [Page3069Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3069Component }])],
  exports: [Page3069Component]
})
export class Page3069Module {}
