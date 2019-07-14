import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3249Component } from './page3249.component';

@NgModule({
  declarations: [Page3249Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3249Component }])],
  exports: [Page3249Component]
})
export class Page3249Module {}
