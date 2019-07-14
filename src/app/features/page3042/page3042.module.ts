import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3042Component } from './page3042.component';

@NgModule({
  declarations: [Page3042Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3042Component }])],
  exports: [Page3042Component]
})
export class Page3042Module {}
