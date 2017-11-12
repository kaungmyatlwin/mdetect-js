# MDetect Javascript

The code is inspire from [MDetect](https://github.com/septemberboy7/MDetect)

Use `loadFont()` function to load opposite font.

For example: Zawgyi font is detected, Unicode font will be loaded and vice versa.

## Usage

Use `loadFont('unicode')` to load Unicode font into browser.
Use `loadFont('zawgyi')` to load Zawgyi font into browser.

For example: 

```javascript
if (isUnicode()) {
  loadFont('zawgyi');
}
else {
  loadFont('unicode');
}
```