import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2912Component } from './page2912.component';

@NgModule({
  declarations: [Page2912Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2912Component }])],
  exports: [Page2912Component]
})
export class Page2912Module {}
