(function () {
  const CODE = "2209";

  if (document.getElementById("modMenuOverlay")) {
    document.getElementById("modMenuOverlay").remove();
  }

  const inputCode = prompt("Enter access code to open Mod Menu:");
  if (inputCode !== CODE) {
    alert("Access Denied.");
    return;
  }

  const style = document.createElement("style");
  style.textContent = `
    #modMenuOverlay {
      position: fixed;
      top: 100px;
      left: 100px;
      width: 250px;
      background: rgba(20, 20, 20, 0.95);
      color: white;
      font-family: sans-serif;
      border-radius: 12px;
      box-shadow: 0 0 15px rgba(0,0,0,0.4);
      padding: 0;
      z-index: 99999;
      user-select: none;
    }
    #modMenuHeader {
      padding: 12px;
      font-size: 20px;
      text-align: center;
      border-bottom: 1px solid #444;
      background: #2a2a2a;
      border-top-left-radius: 12px;
      border-top-right-radius: 12px;
      cursor: move;
    }
    #modMenuContent {
      padding: 12px;
    }
    .mod-btn {
      display: block;
      background: #3a3a3a;
      border: none;
      color: white;
      margin: 6px 0;
      padding: 10px;
      width: 100%;
      border-radius: 8px;
      font-size: 14px;
      cursor: pointer;
      transition: background 0.2s;
    }
    .mod-btn:hover {
      background: #555;
    }
  `;
  document.head.appendChild(style);

  const menu = document.createElement("div");
  menu.id = "modMenuOverlay";
  menu.innerHTML = `
    <div id="modMenuHeader">🎮 Mod Menu</div>
    <div id="modMenuContent"></div>
  `;
  document.body.appendChild(menu);

  const content = document.getElementById("modMenuContent");

  function setMainMenu() {
    content.innerHTML = `
      <button class="mod-btn" id="btn-1v1">1v1.lol Mods</button>
      <button class="mod-btn" id="btn-coins">Free Coins</button>
      <button class="mod-btn" id="btn-more">More Mods</button>
      <button class="mod-btn" id="btn-close">❌ Close</button>
    `;

    document.getElementById("btn-1v1").addEventListener("click", set1v1Menu);
    document.getElementById("btn-coins").addEventListener("click", () => alert("Free Coins Granted! (placeholder)"));
    document.getElementById("btn-more").addEventListener("click", () => alert("More mods coming soon..."));
    document.getElementById("btn-close").addEventListener("click", () => menu.remove());
  }

  function set1v1Menu() {
    content.innerHTML = `
      <button class="mod-btn" id="btn-wallhacks">Wall Hacks</button>
      <button class="mod-btn" id="btn-aimbot">Aimbot</button>
      <button class="mod-btn" id="btn-god">God Mode</button>
      <button class="mod-btn" id="btn-back">⬅ Back</button>
    `;

    document.getElementById("btn-wallhacks").addEventListener("click", () => alert("Wallhacks enabled (placeholder)"));
    document.getElementById("btn-aimbot").addEventListener("click", () => alert("Aimbot activated (placeholder)"));
    document.getElementById("btn-god").addEventListener("click", () => alert("God Mode enabled (placeholder)"));
    document.getElementById("btn-back").addEventListener("click", setMainMenu);
  }

  setMainMenu();

  // Dragging from header only
  const header = document.getElementById("modMenuHeader");
  let isDragging = false;
  let offsetX, offsetY;

  const onPointerDown = (e) => {
    isDragging = true;
    offsetX = e.clientX - menu.offsetLeft;
    offsetY = e.clientY - menu.offsetTop;
    e.preventDefault();
  };

  const onPointerMove = (e) => {
    if (!isDragging) return;
    menu.style.left = e.clientX - offsetX + "px";
    menu.style.top = e.clientY - offsetY + "px";
  };

  const onPointerUp = () => {
    isDragging = false;
  };

  header.addEventListener("mousedown", onPointerDown);
  document.addEventListener("mousemove", onPointerMove);
  document.addEventListener("mouseup", onPointerUp);

  // Mobile support
  header.addEventListener("touchstart", (e) => onPointerDown(e.touches[0]));
  document.addEventListener("touchmove", (e) => onPointerMove(e.touches[0]));
  document.addEventListener("touchend", onPointerUp);
})();
