# v-ripple
Ripple Directive For Vue


## Starting

### CDN
```html
<script src="https://unpkg.com/element-ui/lib/index.js"></script>
<script src="./dist/v-ripple.js"></script>
<script>
    Vue.directive('ripple', VRipple);
</script>
```


## Usage
```html
<!-- default -->
<div v-ripple></div>

<!-- custom -->
<div v-ripple="{color: '#FFF', during: 0.5}"></div>
```