import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3337Component } from './page3337.component';

@NgModule({
  declarations: [Page3337Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3337Component }])],
  exports: [Page3337Component]
})
export class Page3337Module {}
