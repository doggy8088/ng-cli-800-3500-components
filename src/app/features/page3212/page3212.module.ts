import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3212Component } from './page3212.component';

@NgModule({
  declarations: [Page3212Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3212Component }])],
  exports: [Page3212Component]
})
export class Page3212Module {}
