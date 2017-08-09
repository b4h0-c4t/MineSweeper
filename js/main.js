const generateBasicField = (num, len) => {
  let remain = num;
  return Array.from({length: len}, (obj, i) => {
    if(remain / (len - i) > Math.random()) {
      remain--;
      return 1;
    } else {
      return 0;
    }
  });
};

const generateField = (num, x, y) => {
  return generateBasicField(num, x * y);
};

addEventListener('DOMContentLoaded', () => {
  //canvas settings
  const canvas = document.querySelector('#canvas');
  const ctx = canvas.getContext('2d');

  console.log(generateField(3, 2, 3));
});
