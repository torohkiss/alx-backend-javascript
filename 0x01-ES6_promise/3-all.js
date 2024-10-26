import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup() {
  try {
    const [photo, user] = await Promise.all([uploadPhoto(), createUser()]);

    const { body: photoId } = photo;
    const { firstName, lastName } = user;

    console.log(photoId, firstName, lastName);
  } catch (error) {
    console.error('Signup system offline');
  }
}
