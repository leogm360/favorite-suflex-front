//Setup jest-dom matachers as globals
import "@testing-library/jest-dom";

//Setup act to test environment
// @ts-ignore
globalThis.IS_REACT_ACT_ENVIRONMENT = true;
