
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();
export const basePath = publicRuntimeConfig.basePath || '';

export const APP_NAME = "InsuranceBlog";
export const THEME_COLOR_BTN = "#f89c30";

