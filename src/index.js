import { on, off, addClass, removeClass } from "./utils";
import "./style/index.css";

const isProduction = process.env.NODE_ENV === "production";

const eventList = ["click", "mouseup", "touchend", "mouseenter", "touchstart"];

class Ripple {
  constructor(option = {}) {
    let { el } = option;
    if (!el) {
      return this.$log("el not find");
    }

    this.$el = el;
    this.$state = "hide";
    this.$option = Object.assign(
      {
        trigger: [],
        during: 0.5,
        color: 'rgba(0, 0, 0, 0.2)',
        debugger: !isProduction
      },
      option
    );
    this.addEvent();
  }

  addEvent() {
    const { trigger } = this.$option;
    trigger.map(e => {
      on(this.$el, e, this.show.bind(this));
    });
  }

  removeEvent() {
    const { trigger } = this.$option;
    trigger.map(e => {
      off(this.$el, e, this.show.bind(this));
    });
  }

  $log(...arg) {
    if (this.$option && this.$option.debugger) {
      console.log(...arg);
    }
  }

  show(e = { layerX: "50%", layerY: "50%" }) {
    console.log("color", this.$option.color);
    let { width, height } = this.$el.getBoundingClientRect();
    const {color, during} = this.$option;
    this.$el.style.position = "relative";
    this.$el.style.overflow = "hidden";
    let { layerX, layerY } = e;
    console.log(layerX, layerY);
    const radius = Math.max(width, height) / 10;

    if (this.$state !== "hide") return;
    this.$log("show", layerX, layerY);
    this.$state = "show";

    let rippleEl = document.createElement("div");
    let rippleAnimate = document.createElement("div");

    addClass(rippleEl, "v-riple-container");
    addClass(rippleAnimate, "v-riple-container__ripple");
    rippleEl.style.width = width + "px";
    rippleEl.style.height = height + "px";
    rippleAnimate.style.width = radius + "px";
    rippleAnimate.style.height = radius + "px";
    rippleAnimate.style.background = color;
    console.log('during', during);
    rippleAnimate.style.transitionDuration = `${during}s`;
    rippleAnimate.style.top = isNaN(layerY) ? layerY : layerY + "px";
    rippleAnimate.style.left = isNaN(layerX) ? layerX : layerX + "px";

    rippleEl.append(rippleAnimate);
    this.$el.append(rippleEl);

    this.rippleEl = rippleEl;

    setTimeout(() => {
      addClass(this.$el, "active");
      setTimeout(this.hide.bind(this), this.$option.during * 1000);
    });
  }

  hide() {
    this.$log("hide");
    removeClass(this.$el, "active");
    if (this.rippleEl) {
      this.$el.removeChild(this.rippleEl);
    }
    this.rippleEl = null;
    this.$state = "hide";
  }

  destroy() {
    this.$state = "destroyed";
    this.removeEvent();
  }
}

function bind(el, binding) {
  let { modifiers, value = {} } = binding;
  const trigger = Object.keys(modifiers).filter(e => eventList.includes(e));
  el.ripple = new Ripple({
    el,
    ...value,
    trigger: trigger.length ? trigger : ["mouseup"]
  });
}

function unbind(el) {
  el.ripple.destroy();
}

export const VRipple = {
  bind,
  unbind
};

if (!window.VRipple) {
  window.VRipple = VRipple;
}

export default VRipple;
