import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3174Component } from './page3174.component';

@NgModule({
  declarations: [Page3174Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3174Component }])],
  exports: [Page3174Component]
})
export class Page3174Module {}
