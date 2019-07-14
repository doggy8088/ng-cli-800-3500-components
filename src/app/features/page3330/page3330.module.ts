import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3330Component } from './page3330.component';

@NgModule({
  declarations: [Page3330Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3330Component }])],
  exports: [Page3330Component]
})
export class Page3330Module {}
