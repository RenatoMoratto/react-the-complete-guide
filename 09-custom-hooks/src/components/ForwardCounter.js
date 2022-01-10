import Card from './Card';
import useCounter from '../hooks';

const ForwardCounter = () => {
  const counter = useCounter();

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
