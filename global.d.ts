// Unused import - only used to make this file a module (otherwise declare global won't work)
// tslint:disable-next-line:no-unused
import React from 'react';

// Missing type definition for 'customAttributes' prop
declare module 'fslightBox-react' {
  export interface FsLightboxProps {
    customAttributes?: { [key: string]: string }[];
  }
}
