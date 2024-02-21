import { getInfo } from "./rainbow";
import "./style.css";

try {
  const path: string = window.location.pathname;
  const letters: string[] = path.split("/").filter((segment) => segment !== "");
  const element = document.getElementById("info") as HTMLElement;
  if (element) {
    const info = getInfo(letters);
    let html = "";
    for (const term in info) {
      if (info.hasOwnProperty(term)) {
        html += `<div><a class="${info[term].color}" href="${info[term].link}">${info[term].term}</a></div>`;
      }
    }
    element.innerHTML = html.trim();
  }
} catch (e) {
  console.log((e as Error).message);
}
