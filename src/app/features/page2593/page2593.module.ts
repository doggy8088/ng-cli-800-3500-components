import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2593Component } from './page2593.component';

@NgModule({
  declarations: [Page2593Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2593Component }])],
  exports: [Page2593Component]
})
export class Page2593Module {}
