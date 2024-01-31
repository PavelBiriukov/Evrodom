const dotenv = require('dotenv');
dotenv.config({ path: './.env.deploy' });
const {
  DEPLOY_USER, DEPLOY_HOST, DEPLOY_PATH, DEPLOY_REF, DEPLOY_REPOSITORY
} = process.env;

module.exports = {
  apps : [{
    name   : "evrodom",
    script : "dist/main.js"
  },],
  deploy: {
    production: {
      user: DEPLOY_USER,
      host: DEPLOY_HOST,
      ref: DEPLOY_REF,
      repo: DEPLOY_REPOSITORY,
      path: DEPLOY_PATH,
      'pre-deploy-local': `bash scripts/deployEnv.sh ${DEPLOY_USER}@${DEPLOY_HOST} ${DEPLOY_PATH}`,
      'post-deploy': 'cd backend && pwd && nvm use 19 && npm ci  && npm run build && pm2 startOrRestart ecosystem.config.js --env production',
    },
  },
}
