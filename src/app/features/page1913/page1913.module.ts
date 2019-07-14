import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1913Component } from './page1913.component';

@NgModule({
  declarations: [Page1913Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1913Component }])],
  exports: [Page1913Component]
})
export class Page1913Module {}
