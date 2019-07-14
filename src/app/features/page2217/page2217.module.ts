import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2217Component } from './page2217.component';

@NgModule({
  declarations: [Page2217Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2217Component }])],
  exports: [Page2217Component]
})
export class Page2217Module {}
