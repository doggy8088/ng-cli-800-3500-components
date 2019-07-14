import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3026Component } from './page3026.component';

@NgModule({
  declarations: [Page3026Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3026Component }])],
  exports: [Page3026Component]
})
export class Page3026Module {}
