import { Boundary } from "@/app/_components/boundary";
import type { PropsWithChildren } from "react";

export default function Template({ children }: PropsWithChildren) {
  return (
    <Boundary label="Child Template" filePath="child/template.tsx">
      {children}
    </Boundary>
  );
}
