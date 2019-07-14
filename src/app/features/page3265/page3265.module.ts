import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3265Component } from './page3265.component';

@NgModule({
  declarations: [Page3265Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3265Component }])],
  exports: [Page3265Component]
})
export class Page3265Module {}
