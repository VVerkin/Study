const eacher = (arr, callback) => {
  let count = 0;
  setTimeout(function eacherTimer() {
    callback(arr[count++]);
    if (count < arr.length) {
      setTimeout(eacherTimer);
    }
  });
};

const techs = ['JS', 'React', 'TS'];

techs.forEach(tech => {
  console.log('forEach1', tech);
});



eacher(techs, tech => {
  console.log('eacher1', tech);
});

eacher(techs, tech => {
  console.log('eacher2', tech);
});

eacher(techs, tech => {
  console.log('eacher2', tech);
});
