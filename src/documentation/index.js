import authenticationRouteDocs from './authentication.doc';
import basicInfo from './basicInfo';
import userRouteDocs from './user.docs';
import welcomeRouteDocs from './welcome.docs';
import profileDocs from './profile.docs.js';
import confirmEmailRoute from './emailVerification.js';

export default {
  ...basicInfo,
  paths: {
    ...welcomeRouteDocs,
    ...authenticationRouteDocs,
    ...userRouteDocs,
    ...profileDocs,
    ...confirmEmailRoute
  },
};
