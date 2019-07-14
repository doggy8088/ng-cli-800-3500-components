import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3034Component } from './page3034.component';

@NgModule({
  declarations: [Page3034Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3034Component }])],
  exports: [Page3034Component]
})
export class Page3034Module {}
