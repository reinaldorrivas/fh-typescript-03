import { objects } from "./objects/objects";
import { typeTs } from "./objects/type";
import { unionTypes } from "./objects/unionTypes";
import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = /* html */ `
  <div>
    <h1>TypeScript Objects Intro</h1>
  </div>
`;

objects();
typeTs();
unionTypes()
