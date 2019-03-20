let html = document.createElement('html');
let head = document.createElement('head');
let body = document.createElement('body');
let title = document.createElement('title');
let h1 = document.createElement("h1");
let p  = document.createElement("p");
for(let i = 0 ; i < 3 ; ++i) {
    let a = document.createElement("a");
    a.name = 'MyId' + i;
    a.addEventListener(onclick,myEvent);
    p.appendChild(a);
}
function myEvent(event) {
    console.log(event.target.name);
};
head.appendChild(title);
body.appendChild(h1);
body.appendChild(p);
html.appendChild(head);
html.appendChild(body);
console.log(html);