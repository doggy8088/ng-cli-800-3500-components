import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2819Component } from './page2819.component';

@NgModule({
  declarations: [Page2819Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2819Component }])],
  exports: [Page2819Component]
})
export class Page2819Module {}
