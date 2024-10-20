import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { ApplicationRef, EnvironmentInjector, NgZone, Type } from '@angular/core';
import { createApplication } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { WebComp1Component } from './app/web-comp1/web-comp1.component';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';

 const createApp = (): Promise<ApplicationRef> =>{
  return createApplication(
    appConfig
  ).catch(err => console.error(err)) as Promise<ApplicationRef>;
}

const registerWebComponents = (envInjector: EnvironmentInjector): void => {
  const webComponentMap = new Map<string, Type<any>>([
    ["wc-web-comp1", WebComp1Component]
  ]);
  for(const [tagName, comp] of webComponentMap.entries()){
      const custom = createCustomElement(comp, {
          injector: envInjector
      });
      if(!customElements.get(tagName)){
        customElements.define(tagName, custom);
      }
      
  }
} 

(async () => {
  const app = await createApp();
  if(!environment?.production){
    app.injector.get(NgZone).run(()=> app.bootstrap(AppComponent));
    return;
  }
  registerWebComponents(app.injector);
})();

