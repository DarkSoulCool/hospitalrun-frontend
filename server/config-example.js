/* eslint-disable */
var config = {
  couchDbServer: 'localhost',
  couchDbPort: '5984',
  couchDbUseSsl: false,
  couchDbChangesSince: 'now',
  couchAdminUser: 'couchadmin',
  couchAdminPassword: 'test',
  googleClientId: 'FOR GOOGLE SSO; GOOGLE CLIENT ID GOES HERE',
  googleClientSecret: 'FOR GOOGLE SSO; GOOGLE CLIENT SECRET GOES HERE',
  serverPort: '4200',
  server: 'localhost',
  useGoogleAuth: false,
  useSSL: false,
  imagesdir: '/tmp/patientimages',
  attachmentsDir: 'tmp/attachments',
  disableOfflineSync: false, 
  //Set to true to disable offline usage
  /* The following settings are used to enable offline usage of HospitalRun
     You will need to install web-push to generate the keys:
     1. npm install web-push -g 
     2. web-push generate-vapid-keys
     3. You will need to set pushContactInfo to a valid email address
  pushPublicKey: false,
  pushPrivateKey: false,
  pushContactInfo: 'mailto:YOUR ADMIN EMAIL HERE'
  */
};

config.couchCredentials = function() {
  if (config.couchAdminUser && config.couchAdminPassword) {
    return config.couchAdminUser + ':' + config.couchAdminPassword + '@';
  } else {
    return '';
  }
};

config.getProtocol = function(isSSL) {
  return 'http' + (isSSL ? 's' : '') + '://';
};

config.serverURL = config.getProtocol(config.useSSL) + config.server;
if (config.serverPort) {
  config.serverURL += ':' + config.serverPort;
}

config.couchDbURL = config.getProtocol(config.couchDbUseSsl) + config.couchDbServer + ':' + config.couchDbPort;
config.couchAuthDbURL = config.getProtocol(config.couchDbUseSsl) + config.couchCredentials() + config.couchDbServer + ':' + config.couchDbPort;
// config.searchURL = 'http://localhost:9200'; ELASTIC SEARCH URL (OPTIONAL)
config.serverInfo = 'Development Ember CLI server';
module.exports = config;
