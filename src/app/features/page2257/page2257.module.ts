import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2257Component } from './page2257.component';

@NgModule({
  declarations: [Page2257Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2257Component }])],
  exports: [Page2257Component]
})
export class Page2257Module {}
