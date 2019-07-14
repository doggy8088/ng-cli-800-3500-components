import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3226Component } from './page3226.component';

@NgModule({
  declarations: [Page3226Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3226Component }])],
  exports: [Page3226Component]
})
export class Page3226Module {}
