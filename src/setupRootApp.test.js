import { test } from "vitest";
import { setupRootApp } from "./setupRoutApp";

test("Que tenha um titulo na página", ()=>{
    
    const app = document.createElement("div");
    app.innerHTML = setupRootApp();
    const h1 = app.querySelector("h1");
    expect(h1.textContent).toBe("Get started");
});