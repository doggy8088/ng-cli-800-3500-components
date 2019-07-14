import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2102Component } from './page2102.component';

@NgModule({
  declarations: [Page2102Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2102Component }])],
  exports: [Page2102Component]
})
export class Page2102Module {}
