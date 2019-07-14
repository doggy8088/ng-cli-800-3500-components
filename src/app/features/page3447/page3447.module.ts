import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3447Component } from './page3447.component';

@NgModule({
  declarations: [Page3447Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3447Component }])],
  exports: [Page3447Component]
})
export class Page3447Module {}
