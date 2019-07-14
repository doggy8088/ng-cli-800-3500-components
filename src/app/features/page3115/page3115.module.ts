import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3115Component } from './page3115.component';

@NgModule({
  declarations: [Page3115Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3115Component }])],
  exports: [Page3115Component]
})
export class Page3115Module {}
