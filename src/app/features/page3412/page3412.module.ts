import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3412Component } from './page3412.component';

@NgModule({
  declarations: [Page3412Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3412Component }])],
  exports: [Page3412Component]
})
export class Page3412Module {}
