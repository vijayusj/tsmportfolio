import { TypeAnimation } from 'react-type-animation';

const TypeA = () => {
  return (
    <TypeAnimation
      sequence={[
        'Full Stack Developer', // Types 'One'
        1000, // Waits 1s
        'BlockChain Enthusiast', // Deletes 'One' and types 'Two'
        1000, // Waits 2s
        'WEB 3.0 Enthusiast',
        1000,
        'UpComing SDE',
        1000, // Types 'Three' without deleting 'Two'
        'Freelancer',
        1000,
      ]}
      wrapper="div"
      // cursor={true}
      speed={73}
      className={'type'}
      deletionSpeed={70}
      repeat={Infinity}
      // style={{
      //   fontSize: '4rem',

      //   fontWeight: '800',
      // }}
    />
  );
};

export default TypeA;
