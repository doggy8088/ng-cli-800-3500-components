import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3079Component } from './page3079.component';

@NgModule({
  declarations: [Page3079Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3079Component }])],
  exports: [Page3079Component]
})
export class Page3079Module {}
