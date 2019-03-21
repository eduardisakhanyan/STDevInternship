let html = document.createElement('html');
let head = document.createElement('head');
let body = document.createElement('body');

//Filling <head></head>
let title = document.createElement('title');
head.appendChild(title);
for(let i = 0 ; i < 2 ; ++i) {
    let meta = document.createElement('meta');
    head.appendChild(meta);
}

//Filling <body></body>
let h1 = document.createElement('h1');
body.appendChild(h1);

let p = document.createElement('p');
let a = document.createElement('a');
p.appendChild(a);
body.appendChild(p);

let ul = document.createElement('ul');
for(let i = 0 ; i < 3 ; ++i) {
    let li = document.createElement('li');
    ul.appendChild(li);
}
body.appendChild(ul);

//Filling <html></html>
html.appendChild(head);
html.appendChild(body);

console.log(html);