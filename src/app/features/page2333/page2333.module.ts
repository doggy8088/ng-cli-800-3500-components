import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2333Component } from './page2333.component';

@NgModule({
  declarations: [Page2333Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2333Component }])],
  exports: [Page2333Component]
})
export class Page2333Module {}
