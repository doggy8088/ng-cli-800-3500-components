import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2067Component } from './page2067.component';

@NgModule({
  declarations: [Page2067Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2067Component }])],
  exports: [Page2067Component]
})
export class Page2067Module {}
