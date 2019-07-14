import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2010Component } from './page2010.component';

@NgModule({
  declarations: [Page2010Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2010Component }])],
  exports: [Page2010Component]
})
export class Page2010Module {}
