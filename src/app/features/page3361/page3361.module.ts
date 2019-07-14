import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3361Component } from './page3361.component';

@NgModule({
  declarations: [Page3361Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3361Component }])],
  exports: [Page3361Component]
})
export class Page3361Module {}
