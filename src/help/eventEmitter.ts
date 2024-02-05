class EventEmitter {
  private _events: any;
  eventName!: string;
  constructor() {
    this._events = {};
  }

  on(eventName: string, callback: (args?: any) => void) {
    if (this._events[eventName]) {
      if (this.eventName !== 'newListener') {
        this.emit('newListener', eventName);
      }
    }
    const callbacks = this._events[eventName] || [];
    callbacks.push(callback);
    this._events[eventName] = callbacks;
  }

  emit(eventName: string, ...args: [string]) {
    const callbacks = this._events[eventName] || [];
    callbacks.forEach((cb: (arg0: string) => any) => cb(...args));
  }

  once(eventName: string, callback: (res: any) => void) {
    const one = (...args: [string]) => {
      callback(...args);
      this.off(eventName, one as any);
    };
    one.initialCallback = callback;
    this.on(eventName, one);
  }
  /* 用于取消订阅 */
  off(eventName: string, callback: () => void) {
    const callbacks = this._events[eventName] || [];
    const newCallbacks = callbacks.filter(
        (fn: { (): void; initialCallback?: any }) =>
            fn != callback && fn.initialCallback != callback,
    );
    this._events[eventName] = newCallbacks;
  }
}

export const events = new EventEmitter();