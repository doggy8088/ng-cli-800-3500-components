import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2244Component } from './page2244.component';

@NgModule({
  declarations: [Page2244Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2244Component }])],
  exports: [Page2244Component]
})
export class Page2244Module {}
