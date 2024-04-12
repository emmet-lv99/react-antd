import { useEffect } from 'react';

type Props = {
  flag: boolean;
};

const Home: React.FC<Props> = (Props) => {
  // useEffect(() => console.log('say home'), []);
  const flag = Props.flag;
  let test;
  // useEffect(() => (test = flag.String()), [flag]);

  return <div>Home</div>;
};

export default Home;
