import { extendObservable, action } from "mobx";

export default extendObservable(this, {
  count: 0,
  increment: action(() => {
    this.count += 1;
  })
});
