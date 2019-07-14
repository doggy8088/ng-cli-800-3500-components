import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2656Component } from './page2656.component';

@NgModule({
  declarations: [Page2656Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2656Component }])],
  exports: [Page2656Component]
})
export class Page2656Module {}
