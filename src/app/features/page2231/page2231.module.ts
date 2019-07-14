import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2231Component } from './page2231.component';

@NgModule({
  declarations: [Page2231Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2231Component }])],
  exports: [Page2231Component]
})
export class Page2231Module {}
