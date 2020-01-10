/* console.log(' window.location.pathname---', window.location.pathname);
const baseDirectory = window.location.pathname
  .split("/")
  .slice(0, -1)
  .join("/");
console.log(' baseDirectory---', baseDirectory);
export default baseDirectory; */

let baseDirectory = window.location.pathname.split('/');

if (baseDirectory[1].includes('client')) {
  baseDirectory = baseDirectory.slice(0, 2).join('/');
} else {
  baseDirectory = baseDirectory.slice(0, 1).join('/');
  baseDirectory = '';
}
console.log('baseDirectory', window.location.pathname);
export default baseDirectory;
