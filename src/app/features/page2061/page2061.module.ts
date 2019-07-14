import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2061Component } from './page2061.component';

@NgModule({
  declarations: [Page2061Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2061Component }])],
  exports: [Page2061Component]
})
export class Page2061Module {}
