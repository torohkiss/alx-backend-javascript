import ClassRoom from './0-classroom.js';

export default function initializeRooms() {
  const sizeA = new ClassRoom(19);
  const sizeB = new ClassRoom(20);
  const sizeC = new ClassRoom(34);

  return [sizeA, sizeB, sizeC];
}
