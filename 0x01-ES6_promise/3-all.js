import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup () {
  return Promise.all([uploadPhoto(), createUser()])
    .then((results) => {
      const photo = results[0];
      const user = results[1];
      console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
    })
    .catch((error) => {
      console.log('Signup system offline');
    });
}
