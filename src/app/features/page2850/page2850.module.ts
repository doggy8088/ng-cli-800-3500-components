import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2850Component } from './page2850.component';

@NgModule({
  declarations: [Page2850Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2850Component }])],
  exports: [Page2850Component]
})
export class Page2850Module {}
