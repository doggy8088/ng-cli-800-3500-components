import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3443Component } from './page3443.component';

@NgModule({
  declarations: [Page3443Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3443Component }])],
  exports: [Page3443Component]
})
export class Page3443Module {}
