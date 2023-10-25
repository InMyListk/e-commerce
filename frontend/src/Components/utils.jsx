export default function getError(error) {
  return error.responce && error.responce.data.message
    ? error.responce.data.message
    : error.message;
}
