import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3363Component } from './page3363.component';

@NgModule({
  declarations: [Page3363Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3363Component }])],
  exports: [Page3363Component]
})
export class Page3363Module {}
