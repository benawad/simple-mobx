import { runInAction, extendObservable, action } from "mobx";

export default extendObservable(this, {
  people: [],
  loading: false,
  loadPeople: action(async () => {
    this.loading = true;
    // fetch data from api and update people
    const response = await fetch("https://randomuser.me/api/?results=10");
    const json = await response.json();
    runInAction(() => {
      this.people = json.results;
      this.loading = false;
    });
  })
});
