import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2990Component } from './page2990.component';

@NgModule({
  declarations: [Page2990Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2990Component }])],
  exports: [Page2990Component]
})
export class Page2990Module {}
