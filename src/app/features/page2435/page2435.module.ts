import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2435Component } from './page2435.component';

@NgModule({
  declarations: [Page2435Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2435Component }])],
  exports: [Page2435Component]
})
export class Page2435Module {}
