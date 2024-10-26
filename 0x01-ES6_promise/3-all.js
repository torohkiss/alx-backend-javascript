import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup() {
  try {
    const photo = await uploadPhoto();
    const user = await createUser();

    const { body: photoId } = photo;
    const { firstName, lastName } = user;

    console.log(photoId, firstName, lastName);
  } catch (error) {
    console.error('Signup system offline');
  }
}
