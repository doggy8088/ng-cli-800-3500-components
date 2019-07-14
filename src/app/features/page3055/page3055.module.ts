import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3055Component } from './page3055.component';

@NgModule({
  declarations: [Page3055Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3055Component }])],
  exports: [Page3055Component]
})
export class Page3055Module {}
