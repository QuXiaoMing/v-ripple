Vue.directive("ripple", VRipple);

new Vue({
  el: "#app",
  data() {
    return {
      show: false
    };
  },
  template: `
    <div>
      <div :class="['box', 'box1', {'active': show}]" v-ripple.test="{trigger: ['click']}">test</div>
      <div :class="['box', 'box2', {'active': show}]" v-ripple.test="{trigger: ['click']}">test</div>
      <div :class="['box', 'box3', {'active': show}]" v-ripple.test="{trigger: ['click']}">test</div>
    </div>
    `
});
