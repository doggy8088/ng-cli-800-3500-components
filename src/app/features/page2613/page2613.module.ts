import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2613Component } from './page2613.component';

@NgModule({
  declarations: [Page2613Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2613Component }])],
  exports: [Page2613Component]
})
export class Page2613Module {}
