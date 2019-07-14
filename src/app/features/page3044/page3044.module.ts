import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3044Component } from './page3044.component';

@NgModule({
  declarations: [Page3044Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3044Component }])],
  exports: [Page3044Component]
})
export class Page3044Module {}
