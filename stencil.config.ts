import { angularOutputTarget, ValueAccessorConfig } from '@stencil/angular-output-target';
import { sass } from '@stencil/sass';
import { Config } from '@stencil/core';


const angularValueAccessorBindings: ValueAccessorConfig[] = [];

export const config: Config = {
  namespace: 'pruebas-stencil',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    angularOutputTarget({
      componentCorePackage:'',
      directivesProxyFile:'',
      valueAccessorConfigs: angularValueAccessorBindings,
    }),
  ],
  testing: {
    browserHeadless: "new",
  },
};
