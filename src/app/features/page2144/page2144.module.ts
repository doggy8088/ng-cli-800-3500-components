import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2144Component } from './page2144.component';

@NgModule({
  declarations: [Page2144Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2144Component }])],
  exports: [Page2144Component]
})
export class Page2144Module {}
