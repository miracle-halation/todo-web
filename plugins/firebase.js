import firebase from "firebase/app"
import "firebase/auth"

const fbConfig = {
  API_KEY: process.env.API_KEY,
  AUTH_DOMAIN: process.env.AUTH_DOMAIN,
  DATABASE_URL: process.env.DATABASE_URL,
  PROJECT_ID: process.env.PROJECT_ID,
  STORAGE_BUCKET: process.env.STORAGE_BUCKET,
  MESSAGE_SENDER_ID: process.env.MESSAGE_SENDER_ID,
  APP_ID: process.env.APP_ID
};
firebase.initializeApp(fbConfig)

export default firebase