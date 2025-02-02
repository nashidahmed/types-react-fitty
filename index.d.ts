declare module "react-fitty" {
  import { ReactNode, ComponentType, HTMLAttributes } from "react";

  interface FittyProps extends HTMLAttributes<HTMLDivElement> {
    children?: ReactNode;
    minSize?: number;
    maxSize?: number;
    multiLine?: boolean;
    observeMutations?: MutationObserverInit;
  }

  export const ReactFitty: ComponentType<FittyProps>;
}
