import { setThemStore } from "./local-storage-api";
import refs from "./refs";


export function changeThem() {
    refs.body.classList.toggle("theme-dark");

    if (refs.body.classList.contains("theme-dark")) {
        setThemStore("theme-dark");
    } else {
        setThemStore("theme-light");
    }
}