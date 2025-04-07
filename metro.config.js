const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname);


config.transformer.bridgeless = false;

module.exports = withNativeWind(config, { input: './global.css' });
