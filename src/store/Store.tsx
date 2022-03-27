import { Box } from "@mui/material";
import React from "react";

export const StoreContext = React.createContext<any>([[], () => null]);

const Store: React.FC<{}> = ({ children }: any) => {
  const [favPosts, SetFavPosts] = React.useState<any>([]);
  return (
    <>
      <StoreContext.Provider value={[favPosts, SetFavPosts]}>
        <Box>{children}</Box>
      </StoreContext.Provider>
    </>
  );
};
export default Store;
