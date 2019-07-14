import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3260Component } from './page3260.component';

@NgModule({
  declarations: [Page3260Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3260Component }])],
  exports: [Page3260Component]
})
export class Page3260Module {}
