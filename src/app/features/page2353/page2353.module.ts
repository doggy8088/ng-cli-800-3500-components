import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2353Component } from './page2353.component';

@NgModule({
  declarations: [Page2353Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2353Component }])],
  exports: [Page2353Component]
})
export class Page2353Module {}
