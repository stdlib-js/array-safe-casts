<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Safe Casts

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Return a list of array [data types][@stdlib/array/dtypes] to which a provided array [data type][@stdlib/array/dtypes] can be safely cast.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

To use in Observable,

```javascript
safeCasts = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/array-safe-casts@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var safeCasts = require( 'path/to/vendor/umd/array-safe-casts/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-safe-casts@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.safeCasts;
})();
</script>
```

#### safeCasts( \[dtype] )

If provided a `dtype` argument, returns a list of array [data types][@stdlib/array/dtypes] to which a provided array [data type][@stdlib/array/dtypes] can be safely cast.

```javascript
var out = safeCasts( 'float32' );
// e.g., returns [ 'float32', 'float64', 'complex64', 'complex128', 'generic' ]
```

If not provided a `dtype` argument, the function returns a casting table.

```javascript
var out = safeCasts();
// returns {...}

var f32 = out[ 'float32' ];
// returns {...}

var v = f32[ 'float64' ];
// returns 1
```

If provided an unrecognized or unsupported `dtype`, the function returns `null`.

```javascript
var out = safeCasts( 'foo' );
// returns null
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-dtypes@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-safe-casts@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var DTYPES;
var list;
var i;

// Get the list of supported array data types:
DTYPES = dtypes();

// Print the list of array data types to which a data type can be safely cast...
for ( i = 0; i < DTYPES.length; i++ ) {
    list = safeCasts( DTYPES[ i ] );
    console.log( '%s: %s', DTYPES[ i ], list.join( ', ' ) );
}

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/array-convert`][@stdlib/array/convert]</span><span class="delimiter">: </span><span class="description">convert an array to an array of a different data type.</span>
-   <span class="package-name">[`@stdlib/array-convert-same`][@stdlib/array/convert-same]</span><span class="delimiter">: </span><span class="description">convert an array to the same data type as a second input array.</span>
-   <span class="package-name">[`@stdlib/array-dtypes`][@stdlib/array/dtypes]</span><span class="delimiter">: </span><span class="description">list of array data types.</span>
-   <span class="package-name">[`@stdlib/array-same-kind-casts`][@stdlib/array/same-kind-casts]</span><span class="delimiter">: </span><span class="description">return a list of array data types to which a provided array data type can be safely cast or cast within the same kind.</span>
-   <span class="package-name">[`@stdlib/ndarray-safe-casts`][@stdlib/ndarray/safe-casts]</span><span class="delimiter">: </span><span class="description">return a list of ndarray data types to which a provided ndarray data type can be safely cast.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/array-safe-casts.svg
[npm-url]: https://npmjs.org/package/@stdlib/array-safe-casts

[test-image]: https://github.com/stdlib-js/array-safe-casts/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/array-safe-casts/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/array-safe-casts/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/array-safe-casts?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/array-safe-casts.svg
[dependencies-url]: https://david-dm.org/stdlib-js/array-safe-casts/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/array-safe-casts/tree/deno
[umd-url]: https://github.com/stdlib-js/array-safe-casts/tree/umd
[esm-url]: https://github.com/stdlib-js/array-safe-casts/tree/esm
[branches-url]: https://github.com/stdlib-js/array-safe-casts/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/array-safe-casts/main/LICENSE

<!-- <related-links> -->

[@stdlib/array/convert]: https://github.com/stdlib-js/array-convert/tree/umd

[@stdlib/array/convert-same]: https://github.com/stdlib-js/array-convert-same/tree/umd

[@stdlib/array/dtypes]: https://github.com/stdlib-js/array-dtypes/tree/umd

[@stdlib/array/same-kind-casts]: https://github.com/stdlib-js/array-same-kind-casts/tree/umd

[@stdlib/ndarray/safe-casts]: https://github.com/stdlib-js/ndarray-safe-casts/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->
