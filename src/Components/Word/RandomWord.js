
const RandomWord = () => {
  const words = [
    ['a','g','a','i','n'],
    ['b','a','c','o','n'],
    ['b','r','a','i','n'],
    ['c','a','m','e','l'],
    ['d','a','n','c','e']
  ];

  const getRandomWord = () => {  
    return   words[Math.floor(Math.random()*words.length)];
  };


  return (
    <div>
    {getRandomWord}
    </div>
  );
};

export default RandomWord;