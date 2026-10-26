import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { PrimerComponent } from './components/primercomponent/primercomponent';
import { SegundoComponet } from './components/segundocomponent/segundocomponent';

@NgModule({
  declarations: [
    App, PrimerComponent, SegundoComponet
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
  ],
  bootstrap: [App]
})
export class AppModule { }
