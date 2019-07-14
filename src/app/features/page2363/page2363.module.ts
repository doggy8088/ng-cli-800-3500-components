import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2363Component } from './page2363.component';

@NgModule({
  declarations: [Page2363Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2363Component }])],
  exports: [Page2363Component]
})
export class Page2363Module {}
