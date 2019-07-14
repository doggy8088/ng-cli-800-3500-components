import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2285Component } from './page2285.component';

@NgModule({
  declarations: [Page2285Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2285Component }])],
  exports: [Page2285Component]
})
export class Page2285Module {}
