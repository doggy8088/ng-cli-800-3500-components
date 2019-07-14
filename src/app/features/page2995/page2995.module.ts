import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2995Component } from './page2995.component';

@NgModule({
  declarations: [Page2995Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2995Component }])],
  exports: [Page2995Component]
})
export class Page2995Module {}
