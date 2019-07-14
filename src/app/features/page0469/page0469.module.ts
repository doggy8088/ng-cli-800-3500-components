import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0469Component } from './page0469.component';

@NgModule({
  declarations: [Page0469Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0469Component }])],
  exports: [Page0469Component]
})
export class Page0469Module {}
