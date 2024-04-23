import jsonPackage from "../../../package.json" with {type:"json"};

export const APP_VERSION: string = jsonPackage?.version || "0.0.1";
export const API_URL = process.env.NEXT_PUBLIC_API_URL
