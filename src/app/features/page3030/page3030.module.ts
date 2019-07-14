import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3030Component } from './page3030.component';

@NgModule({
  declarations: [Page3030Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3030Component }])],
  exports: [Page3030Component]
})
export class Page3030Module {}
