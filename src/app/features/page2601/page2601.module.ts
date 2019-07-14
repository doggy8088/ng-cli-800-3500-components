import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2601Component } from './page2601.component';

@NgModule({
  declarations: [Page2601Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2601Component }])],
  exports: [Page2601Component]
})
export class Page2601Module {}
