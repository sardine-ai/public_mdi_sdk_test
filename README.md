# public_mdi_sdk_test

## Installation

```sh
npm install public_mdi_sdk_test
OR
yarn add public_mdi_sdk_test
```

## Usage

### Include MDI provider on the routes

```js
setupMDI({
    clientId="e149f2c5-4fce-4aef-98fd-90967c6aef5d", // REPLACE_YOUR_CLIENT_ID
    environment="sandbox"
});
```

### Call MDIContext functions to setup/update actions at page level

```js
// Update Config
await updateMDIConfig({
  customerId: 'REPLACE_CUSTOMER_ID',
  sessionKey: 'REPLACE_SESSION_KEY',
  flow: 'REPLACE_FLOW',
  partnerId: "PARTNER_ID"; // Optional
  parentSessionKey: "PARTNER_SESSION_KEY"; // Optional
  enableBiometrics: "HANDLE_BB"; // Optional
  enableGeoLocation: "HANDLE_GPS_DATA"; // Optional
  enablePortScanning: "HANDLE_PORT_SCANNING"; // Optional
  fields: "ARRAY_OF_CUSTOM_FIELDS"; // Optional (e.g. VGS)
});

// Get MDI Config
getMDIConfig((config: MDIUpdateConfig) => console.log('config', config));
```
