import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2310Component } from './page2310.component';

@NgModule({
  declarations: [Page2310Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2310Component }])],
  exports: [Page2310Component]
})
export class Page2310Module {}
