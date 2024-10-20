import { ApplicationRef, CUSTOM_ELEMENTS_SCHEMA, DoBootstrap, Injector, NgModule, Type } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';
import { WebComp1Component } from './web-comp1/web-comp1.component';

@NgModule({
  declarations: [
    //AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule implements DoBootstrap {
    constructor(private injector: Injector){

    }

    ngDoBootstrap(appRef: ApplicationRef): void {
        const webComponentMap = new Map<string, Type<any>>([
            ["web-comp1", WebComp1Component]
        ]);
        for(const [tagName, comp] of webComponentMap.entries()){
            const custom = createCustomElement(comp, {
                injector: this.injector
            });
            customElements.define(tagName, custom);
        }
    }
 }
