

class ReactEvent{

  private _events: Record<string,any>;
  constructor() {
    this._events ={};
  }

  on(eventName: string, callback: (args?: any) => void){
    const callbacks = this._events[eventName] || [];
    callbacks.push(callback);
    this._events[eventName] = callbacks;
  }
  emit(eventName: string, ...args: [string]) {
    const callbacks = this._events[eventName] || [];
    callbacks.forEach((cb: (arg0: string) => any) => cb(...args));
  }
  off(eventName: string, callback:()=>void){
    const callbacks = this._events[eventName] || [];
    const newCallbacks = callbacks.filter(
        (fn:()=>void) => fn != callback
    );
    this._events[eventName] = newCallbacks;
  }
}

export {
  ReactEvent
}