/**
 * 给元素添加监听事件 addEventListener
 */
export const on = (function() {
  if (document.addEventListener) {
    return function(element, event, handler) {
      if (element && event && handler) {
        element.addEventListener(event, handler, false);
      }
    };
  } else {
    return function(element, event, handler) {
      if (element && event && handler) {
        element.attachEvent("on" + event, handler);
      }
    };
  }
})();

/**
 * 移除某个元素的监听事件
 */
export const off = (function() {
  if (document.removeEventListener) {
    return function(element, event, handler) {
      if (element && event) {
        element.removeEventListener(event, handler, false);
      }
    };
  } else {
    return function(element, event, handler) {
      if (element && event) {
        element.detachEvent("on" + event, handler);
      }
    };
  }
})();

export const hasClass = (el, cls) => {
  return el.className.match(new RegExp("(\\s|^)" + cls + "(\\s|$)"));
};

export const addClass = (el, cls) => {
  if (!hasClass(el, cls)) el.className += " " + cls;
};

export const removeClass = (el, cls) => {
  if (hasClass(el, cls)) {
    var reg = new RegExp("(\\s|^)" + cls + "(\\s|$)");
    el.className = el.className.replace(reg, " ");
  }
};

/**
 * 动态切换样式
 */
export const toggleClass = (el, cls) => {
  if (hasClass(el, cls)) {
    removeClass(el, cls);
  } else {
    addClass(el, cls);
  }
};
