import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2145Component } from './page2145.component';

@NgModule({
  declarations: [Page2145Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2145Component }])],
  exports: [Page2145Component]
})
export class Page2145Module {}
