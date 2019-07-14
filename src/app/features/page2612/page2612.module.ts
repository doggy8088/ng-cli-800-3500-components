import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2612Component } from './page2612.component';

@NgModule({
  declarations: [Page2612Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2612Component }])],
  exports: [Page2612Component]
})
export class Page2612Module {}
