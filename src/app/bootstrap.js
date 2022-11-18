import findPairsEqual from './../utils/findPairsEqual';

const data = [1, 1, 2, 4, 5, 6, -1, 1.5, 1, 4, 8.5, 100];

const container = document.getElementById('container');
const content = document.createElement('span');

content.innerHTML = JSON.stringify(findPairsEqual(data, 10));
container.appendChild(content);
