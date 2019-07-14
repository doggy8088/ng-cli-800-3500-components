import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2042Component } from './page2042.component';

@NgModule({
  declarations: [Page2042Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2042Component }])],
  exports: [Page2042Component]
})
export class Page2042Module {}
