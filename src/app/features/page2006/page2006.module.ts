import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2006Component } from './page2006.component';

@NgModule({
  declarations: [Page2006Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2006Component }])],
  exports: [Page2006Component]
})
export class Page2006Module {}
