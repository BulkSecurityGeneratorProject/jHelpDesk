import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HelpDeskSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [HelpDeskSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [HelpDeskSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HelpDeskSharedModule {
  static forRoot() {
    return {
      ngModule: HelpDeskSharedModule
    };
  }
}
