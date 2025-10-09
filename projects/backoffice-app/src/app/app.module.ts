
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { importProvidersFrom } from '@angular/core';
import { UiButtonComponent } from '../../../ui-lib/src/lib/ui-button/ui-button.component';

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(UiButtonComponent)],
});

export class AppModule { }
