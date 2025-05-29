import * as React from "react";

interface WithChildren {
   children: React.ReactNode;
}

export const RemoveScroll: React.FC<WithChildren> = ({ children }) => (
   <>{children}</>
);

export const RemoveScrollBarrier: React.FC<WithChildren> = ({ children }) => (
   <>{children}</>
);

export const RemoveScrollContext = {
   Provider: ({ children }: WithChildren) => <>{children}</>,
};

export const RemoveScrollShim: React.FC<WithChildren> = ({ children }) => (
   <>{children}</>
);
