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

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Return a list of array [data types][@stdlib/array/dtypes] to which a provided array [data type][@stdlib/array/dtypes] can be safely cast.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/array-safe-casts
```

</section>

<section class="usage">

## Usage

```javascript
var safeCasts = require( '@stdlib/array-safe-casts' );
```

#### safeCasts( \[dtype] )

If provided a `dtype` argument, returns a list of array [data types][@stdlib/array/dtypes] to which a provided array [data type][@stdlib/array/dtypes] can be safely cast.

```javascript
var out = safeCasts( 'float32' );
// e.g., returns [ 'float32', 'float64', 'generic' ]
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

```javascript
var dtypes = require( '@stdlib/array-dtypes' );
var safeCasts = require( '@stdlib/array-safe-casts' );

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

-   [`@stdlib/array/convert`][@stdlib/array/convert]: convert an array to an array of a different data type.
-   [`@stdlib/array/convert-same`][@stdlib/array/convert-same]: convert an array to the same data type as a second input array.
-   [`@stdlib/array/dtypes`][@stdlib/array/dtypes]: list of array data types.
-   [`@stdlib/array/same-kind-casts`][@stdlib/array/same-kind-casts]: return a list of array data types to which a provided array data type can be safely cast or cast within the same kind.
-   [`@stdlib/ndarray/safe-casts`][@stdlib/ndarray/safe-casts]: return a list of ndarray data types to which a provided ndarray data type can be safely cast.

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

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/array-safe-casts.svg
[npm-url]: https://npmjs.org/package/@stdlib/array-safe-casts

[test-image]: https://github.com/stdlib-js/array-safe-casts/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/array-safe-casts/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/array-safe-casts/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/array-safe-casts?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/array-safe-casts.svg
[dependencies-url]: https://david-dm.org/stdlib-js/array-safe-casts/main

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/array-safe-casts/main/LICENSE

<!-- <related-links> -->

[@stdlib/array/convert]: https://github.com/stdlib-js/array-convert

[@stdlib/array/convert-same]: https://github.com/stdlib-js/array-convert-same

[@stdlib/array/dtypes]: https://github.com/stdlib-js/array-dtypes

[@stdlib/array/same-kind-casts]: https://github.com/stdlib-js/array-same-kind-casts

[@stdlib/ndarray/safe-casts]: https://github.com/stdlib-js/ndarray-safe-casts

<!-- </related-links> -->

</section>

<!-- /.links -->
