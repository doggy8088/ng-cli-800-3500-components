import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3190Component } from './page3190.component';

@NgModule({
  declarations: [Page3190Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3190Component }])],
  exports: [Page3190Component]
})
export class Page3190Module {}
