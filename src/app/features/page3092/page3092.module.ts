import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3092Component } from './page3092.component';

@NgModule({
  declarations: [Page3092Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3092Component }])],
  exports: [Page3092Component]
})
export class Page3092Module {}
