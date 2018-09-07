# v-ripple
Ripple Directive For Vue


## Starting

### NPM
1. install
```bash
npm install ripple-vue -S
```

2. import
```javaScript
import Vue from 'vue';
import VRipple from 'ripple-vue';

Vue.directive('ripple', VRipple);
```

### CDN
```html
<script src="https://cdn.bootcss.com/vue/2.5.16/vue.min.js"></script>
<script src="./dist/v-ripple.js"></script>
<script>
    Vue.directive('ripple', VRipple);
</script>
```


## Usage
```html
<!-- Default -->
<div v-ripple></div>

<!-- Customized -->
<div v-ripple="{color: '#FFF', during: 0.5}"></div>
```