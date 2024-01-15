import { NgModuleRef, ApplicationRef } from '@angular/core'
import { createNewHosts } from '@angularclass/hmr'

export const hmrBootstrap = (
  module: any,
  bootstrap: () => Promise<NgModuleRef<any>>
) => {
let ngModule: NgModuleRef<any>
module.hot.accept()
bootstrap().then(mod => (ngModule = mod))
module.hot.dispose(() => {
const appRef: ApplicationRef = ngModule.injector.get(ApplicationRef)
const elements = appRef.components.map(c => c.location.nativeElement)
const makeVisible = createNewHosts(elements)
ngModule.destroy()
makeVisible()
})
}

//main.ts
import { enableProdMode } from '@angular/core'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { environment } from '../environments/environment'
import { hmrBootstrap } from '../hmr'
import { RootModule } from './app/root/root.module'

if (environment.production) {
  enableProdMode()
}

const bootstrap = () => platformBrowserDynamic().bootstrapModule(RootModule)

if (environment.hmr) {
  if (module['hot']) {
     hmrBootstrap(module, bootstrap)
  } else {
    console.error('HMR is not enabled for webpack-dev-server!')
    console.log('Are you using the --hmr flag for ng serve?')
  }
} else {
  bootstrap().catch(err => console.log(err))
}