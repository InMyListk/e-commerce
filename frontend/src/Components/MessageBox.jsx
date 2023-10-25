import { Alert } from 'react-bootstrap';

export default function MessageBox(props) {
  // eslint-disable-next-line react/prop-types
  return <Alert variant={props.variant || 'info'}>{props.children}</Alert>;
}
