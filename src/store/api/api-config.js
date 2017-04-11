export default {

  loglevel: 'debug',

  // build configuration
  buildUseMinifiers: false,
  buildUseSourcemaps: true,
  buildUsePlumber: true,
  newRelicInjectable: null,
  googleInjectable: null,

  // setup where the login page lies and wheter app can use its own login form to re-auth
  allowAppLogin: true,
  loginPage: '//dev-wordpress.pureprofile.com/login',

  // setup location of the authd instance
  authdUrl: '//dev-auth-api.pureprofile.com/api/v1',
  authdPlatformKey: '1efdfeb8-a14a-4eac-b66d-6c4929e4376c',
  anonymousInstanceUuid: '3410f867-ab4f-40f2-8690-65f3fd3dabf2',
  anonymousAhApiUrl: '//dev-ah-api.pureprofile.com/api/v1',

  // override location of ah-api for local development, otherwise it's loaded from authd
  overrideAccountHolderApiUrl: false,

  // oauth-js setup
  oauthUrl: 'https://dev-oauth.pureprofile.com',
  oauthPublicKey: '0OzxN06D73ZcLOFlieCdCoIBad0',

  // Legacy .net api
  legacyAccounts: {
    accounts: 'https://accounts.pureprofile.com',
    settings: 'https://settings.pureprofile.com'
  },

  // Referral link
  refUrl: 'http://dev-referral.pureprofile.com',

  instanceUuids: {
    'pp-nz': '168ee3ac-6739-409c-897b-92c5c564729e'
  },

  outdatedBrowsers: {
    chrome: '44',
    firefox: '40',
    ie: '10',
    opera: '31',
    safari: '7'
  }

};
