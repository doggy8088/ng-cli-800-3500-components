import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3200Component } from './page3200.component';

@NgModule({
  declarations: [Page3200Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3200Component }])],
  exports: [Page3200Component]
})
export class Page3200Module {}
