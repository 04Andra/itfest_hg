import {createContext} from "react";

export const MyContext = createContext({

    authProducerContext: {},
    setAuthProducerContext: () => {},
    authCustomerContext: {},
    setAuthCustomerContext: () => {},
    productCardBig: [],
    setProductCardBig: () => {},
    productCardSmall: [],
    setProductCardSmall: () => {},

})