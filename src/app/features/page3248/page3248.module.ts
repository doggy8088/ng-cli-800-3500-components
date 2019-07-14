import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3248Component } from './page3248.component';

@NgModule({
  declarations: [Page3248Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3248Component }])],
  exports: [Page3248Component]
})
export class Page3248Module {}
