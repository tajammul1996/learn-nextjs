// module.exports = {
//     webpack: {
//         plugins: [new MyWebPackPlugin()]
//     }
// }

// const {PHASE_PRODUCTION_BUILD, PHASE_DEVELOPMENT_SERVER} = require("next/constants");
// const withOffline = 

// module.exports = (phase, {defaultConfig}) => {
//      if(phase === PHASE_DEVELOPMENT_SERVER) {
//          console.log("I'm in dev mode")

//          return defaultConfig;
//      }

//      return defaultConfig;
    
// }

const nextEnv = require('next-env');
const dotenvLoad = require('dotenv-load');
 
dotenvLoad();
 
const withNextEnv = nextEnv();
 
module.exports = withNextEnv({
  // Your Next.js config.
});