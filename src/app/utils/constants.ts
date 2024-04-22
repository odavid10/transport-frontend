import jsonPackage from "../../../package.json" with {type:"json"};

export const APP_VERSION: string = jsonPackage?.version || "0.0.1";
