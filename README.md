# Activelink.js

Add specified css class to `<a>` tag which matches current URL.

## Usage

Start with
```
<script src="jquery.activelink.min.js"></script>
```

And a nav block

```html
<ul data-classname="active" data-parent="li">
  <li><a href="/">index</a></li>
  <li><a href="/feature/foo">foo</a></li>
  <li><a href="/feature/bar">bar</a></li>
</ul>
```

Initialize

```javascript
$(function () {
  $('ul').activelink()
})
```

Say, current URL is `http://example.com/feature/foo`, that is it.


```html
<ul data-classname="active" data-parent="li">
  <li><a href="/">index</a></li>
  <li class="active"><a href="/feature/foo">foo</a></li>
  <li><a href="/feature/bar">bar</a></li>
</ul>
```

Options can be passed via data attributes or JavaScript. For data attributes, 
append the option name to `data-`, as in `data-classname="selected"`.

| Name        | Default           | Description  |
| ------------- |-------------| -----|
| classname     | 'active'| activated class name |
| parent     | ''      |  Specify which element the css class append to. If no selector provide, current `a` element will be used.

Above example is equivalent to

```html
<ul activelink>
  <li><a href="/">index</a></li>
  <li><a href="/feature/foo">foo</a></li>
  <li><a href="/feature/bar">bar</a></li>
</ul>
```

```
$(function () {
  $('[activelink]').activelink({
    parent: 'li'
  })
})
```
## Licence

Activelink.js is licensed under the [Apache License Version 2.0](http://www.apache.org/licenses/LICENSE-2.0)
