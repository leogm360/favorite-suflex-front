//Setup jest-dom matchers as globals
import "@testing-library/jest-dom";

//Setup react act environment to test
// @ts-ignore
globalThis.IS_REACT_ACT_ENVIRONMENT = true;
