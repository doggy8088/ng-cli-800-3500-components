import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2361Component } from './page2361.component';

@NgModule({
  declarations: [Page2361Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2361Component }])],
  exports: [Page2361Component]
})
export class Page2361Module {}
