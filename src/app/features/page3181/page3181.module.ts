import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3181Component } from './page3181.component';

@NgModule({
  declarations: [Page3181Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3181Component }])],
  exports: [Page3181Component]
})
export class Page3181Module {}
