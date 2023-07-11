const foo = document.querySelector('#first');
const bar = document.querySelector('#second');
const foobar = document.querySelector('#third');
const main = document.querySelector('main');

foo.addEventListener('click', function() {
    const tag = document.createElement('h3');
    tag.textContent = "Foo";
    main.appendChild(tag);
});

bar.addEventListener('click', function() {
    const tag = document.createElement('h3');
    tag.textContent = "Bar";
    main.appendChild(tag);
});

foobar.addEventListener('click', function() {
    const tag = document.createElement('h2');
    tag.textContent = "Foobar";
    main.appendChild(tag);
});