import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2589Component } from './page2589.component';

@NgModule({
  declarations: [Page2589Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2589Component }])],
  exports: [Page2589Component]
})
export class Page2589Module {}
