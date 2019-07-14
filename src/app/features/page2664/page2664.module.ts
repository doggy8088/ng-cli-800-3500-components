import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2664Component } from './page2664.component';

@NgModule({
  declarations: [Page2664Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2664Component }])],
  exports: [Page2664Component]
})
export class Page2664Module {}
