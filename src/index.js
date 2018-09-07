import { on, off, addClass, removeClass } from "./utils";
import "./style/index.css";

const isProduction = process.env.NODE_ENV === "production";

class Tripple {
  constructor(option = {}) {
    let { el } = option;
    this.$el = el;
    this.$state = "hide";
    this.$option = Object.assign(
      {
        trigger: "click",
        during: 0.3,
        debugger: !isProduction
      },
      option
    );

    if (!el) {
      return this.$log("el not find");
    }

    this.addEvent();
  }

  $log(...arg) {
    if (this.$option.debugger) {
      console.log(...arg);
    }
  }

  addEvent() {
    const el = this.$el;
    on(el, "click", this.show.bind(this));
  }

  show(e = { offsetX: "50%", offsetY: "50%" }) {
    let { width, height } = this.$el.getBoundingClientRect();
    let { offsetX, offsetY } = e;
    const radius = Math.max(width, height) / 10;

    if (this.$state !== "hide") return;
    this.$log("show", offsetX, offsetY);
    this.$state = "show";

    let rippleEl = document.createElement("div");
    let rippleAnimate = document.createElement("div");

    addClass(rippleEl, "v-riple-container");
    addClass(rippleAnimate, "v-riple-container__tripple");

    rippleEl.style.width = width + "px";
    rippleEl.style.height = height + "px";
    rippleAnimate.style.width = radius + "px";
    rippleAnimate.style.height = radius + "px";
    rippleAnimate.style.top = offsetY + "px";
    rippleAnimate.style.left = offsetX + "px";

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
  }
}

function bind(el, binding) {
  el.tripple = new Tripple({
    el
  });
}

function unbind(el) {
  console.log(el);
}

export const VRipple = {
  bind,
  unbind
};

if (!window.VRipple) {
  window.VRipple = VRipple;
}

export default VRipple;
