import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2076Component } from './page2076.component';

@NgModule({
  declarations: [Page2076Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2076Component }])],
  exports: [Page2076Component]
})
export class Page2076Module {}
