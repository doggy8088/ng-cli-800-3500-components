import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2178Component } from './page2178.component';

@NgModule({
  declarations: [Page2178Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2178Component }])],
  exports: [Page2178Component]
})
export class Page2178Module {}
