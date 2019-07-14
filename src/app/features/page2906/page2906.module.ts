import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2906Component } from './page2906.component';

@NgModule({
  declarations: [Page2906Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2906Component }])],
  exports: [Page2906Component]
})
export class Page2906Module {}
