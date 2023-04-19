import {
  setupSardine,
  updateSardineConfig,
  getDeviceResponse,
  getSardineConfig,
} from "@sardine-ai/web-sdk";
import { SardineConfigBase, SardineUpdateConfig } from "@sardine-ai/web-sdk/dist/config";

const setupMDI = (params: SardineConfigBase) => {
  setupSardine(params);
};

const updateMDIConfig = async (params: SardineUpdateConfig) => {
  return updateSardineConfig(params);
};

const getMDIConfig = () => {
  return getSardineConfig();
};

export { setupMDI, updateMDIConfig, getMDIConfig, getDeviceResponse };
