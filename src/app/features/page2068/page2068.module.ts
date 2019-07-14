import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2068Component } from './page2068.component';

@NgModule({
  declarations: [Page2068Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2068Component }])],
  exports: [Page2068Component]
})
export class Page2068Module {}
