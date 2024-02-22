/*-------------------------------*/
/*                               */
/*                               */
/*                               */
/*                               */
/*-------------------------------*/


'use strict';

/*                               
    BOM -> Browser Object Model
    In javaScript, the 'window' object reporesents the current browser window
    or tab. it is a global object that serves as the interface for interacting
    with the user's browser

*/

const url = document.querySelector('.url');
const btn = document.querySelector('button');

// console.log(window);  // to display the objects on the brower's console

btn.addEventListener('click', () => {
    let res = window.location.href;
    url.innerText = res;
});