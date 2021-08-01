import React, { FC, ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";

// ----- Examples Provider imports ----- //
// import {ThemeProvider} from 'my-ui-lib'
// import {TranslationProvider} from 'my-i18n-lib'
// import defaultStrings from 'i18n/en-x-default'

// ----- Optional Provider/contexts/etc Wrapper ----- //
// const AllTheProviders: FC = ({children}) => {
//   return (
//     <ThemeProvider theme="light">
//       <TranslationProvider messages={defaultStrings}>
//         {children}
//       </TranslationProvider>
//     </ThemeProvider>
//   )
// }

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) =>
  render(ui, {
    /*
  // ----- Optional wrapper goes here ----- //
  wrapper: AllTheProviders,
  */
    ...options,
  });

export * from "@testing-library/react";
export { customRender as render };
