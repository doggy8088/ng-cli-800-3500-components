import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2160Component } from './page2160.component';

@NgModule({
  declarations: [Page2160Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2160Component }])],
  exports: [Page2160Component]
})
export class Page2160Module {}
