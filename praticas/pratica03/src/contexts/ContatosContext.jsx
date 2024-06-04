import React, { createContext } from "react";

const ContatoContext = createContext(initialContext)

export default ContatoContext

const initialContext = {
    meusContatos: [],
    incluirContato: () => {},
  }

