import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3061Component } from './page3061.component';

@NgModule({
  declarations: [Page3061Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3061Component }])],
  exports: [Page3061Component]
})
export class Page3061Module {}
