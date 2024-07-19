
//console.log(global)

global.setTimeout(() => {
  console.log('should pop out in three seconds');
  clearInterval(interval);
}, 3000);

const interval = setInterval(() => {
  console.log('This is the interval things')
}, 2000);
