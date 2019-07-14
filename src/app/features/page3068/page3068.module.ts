import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3068Component } from './page3068.component';

@NgModule({
  declarations: [Page3068Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3068Component }])],
  exports: [Page3068Component]
})
export class Page3068Module {}
