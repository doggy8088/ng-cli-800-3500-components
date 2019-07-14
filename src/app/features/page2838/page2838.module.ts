import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2838Component } from './page2838.component';

@NgModule({
  declarations: [Page2838Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2838Component }])],
  exports: [Page2838Component]
})
export class Page2838Module {}
