import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const Mock = new MockAdapter(axios, {
  delayResponse: 0
});
export default Mock;