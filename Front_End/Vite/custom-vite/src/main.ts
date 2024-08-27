import { getRandomemoji, getRandomNumber } from "./util";
import styles from "../css/style.module.css";
const log: (...data: any[]) => void = console.log;

// add styling dynamically to element using -> css modules
document.querySelector("h1")!.className = styles.header;

log("The Random Number =>", getRandomNumber(1, 100));
log("The Random Number =>", getRandomemoji());
