import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3020Component } from './page3020.component';

@NgModule({
  declarations: [Page3020Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3020Component }])],
  exports: [Page3020Component]
})
export class Page3020Module {}
