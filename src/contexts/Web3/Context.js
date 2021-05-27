import React, { createContext } from "react";

const Web3Context = createContext({
  handleConnect: () => {},
  // handleDisconnect: () => {},
  connected: false,
});

export default Web3Context;
