// ex-1 start
//==================================================================================
//==================================================================================
//==================================================================================
const boxCont = document.getElementById("boxContainer");
const dropArea = document.getElementById("dropArea");

let draggable = null; // to save the current dargged box
const max_boxes = 25; // max number of boxes to put inside the drop area
let count = 0; // to count the dropped boxes
let afterBox = null;

// tools
// --------------------------------------------------------
const rand_color = async () => {
  return Math.random() * 255;
};

const set_color = async (box) => {
  box.style.backgroundColor = `
    rgb(${await rand_color()}, ${await rand_color()}, ${await rand_color()})`;
};

const make_undraggable = () => {
  draggable.draggable = false;
  draggable.classList.remove("dragging");
};

const isFilled = () => {
  return dropArea.childElementCount >= max_boxes;
};

const append_box = () => {
  const box = document.createElement("div");
  dropArea.appendChild(box);
  box.className = "box";
  set_color(box);
  dropArea.appendChild(box);
};

const fill_area = () => {
  const count = max_boxes - dropArea.childElementCount;
  for (let i = 0; i < count; ++i) append_box();
};

const clickHandler = async (e) => {
  const box = e.target;
  if (box.draggable) set_color(box);
};
const dragStartHandler = (e) => {
  // console.log("Drag Start");
  const box = e.target;
  box.classList.add("dragging");
};
const dragEndHandler = (e) => {
  // console.log("Drag End");
  const box = e.target;
  box.classList.remove("dragging");
};

const add_new_box = () => {
  draggable = document.createElement("div");
  draggable.className = "box";
  draggable.draggable = true;
  set_color(draggable);
  boxCont.appendChild(draggable);

  // add events to the new box
  draggable.addEventListener("click", clickHandler);
  draggable.addEventListener("dragstart", dragStartHandler);
  draggable.addEventListener("dragend", dragEndHandler);
};
add_new_box();

const remove_box_events_after_drop = () => {
  // console.log("box events removed");
  draggable.removeEventListener("click", clickHandler);
  draggable.removeEventListener("dragstart", dragStartHandler);
  draggable.removeEventListener("dragend", dragEndHandler);
};

// --------------------------------------------------------

// dropArea events
// --------------------------------------------------------

// double click event to remove elements from dropArea
dropArea.addEventListener("dblclick", (e) => {
  const box = e.target;
  if (box.matches(".box")) {
    box.remove();
    // console.log("Box Removed");
    // console.log(`count: ${dropArea.childElementCount}`);
  }
});

// event when a dragged ele leave the drop area
dropArea.addEventListener("dragleave", () => {
  // remove the filled class
  dropArea.classList.remove("filled");
  if (!boxCont.childElementCount) {
    boxCont.appendChild(draggable);
  }
});

const get_after_box = (X, Y) => {
  const boxList = [...dropArea.querySelectorAll(".box:not(.dragging)")];
  return boxList.reduce(
    (prevBox, currBox) => {
      const rect = currBox.getBoundingClientRect();
      const offsetX = X - rect.x - (rect.width >>> 1);
      const isInside =
        rect.top < Y && rect.bottom > Y && rect.left < X && rect.right > X;
      if (isInside && offsetX < 0 && offsetX > prevBox.offsetX) {
        return { offsetX: offsetX, afterBox: currBox };
      } else {
        return prevBox;
      }
    },
    {
      offsetX: Number.NEGATIVE_INFINITY,
      afterBox: null,
    }
  ).afterBox;
};

// dragover event
dropArea.addEventListener("dragover", (e) => {
  // console.log("Drag Over");
  if (!isFilled()) {
    e.preventDefault(); // prevent default to allow (drop event)
    afterBox = get_after_box(e.clientX, e.clientY);
  } else {
    dropArea.classList.add("filled");
  }
});

// drop event
dropArea.addEventListener("drop", (e) => {
  // console.log("Drop");
  // prevent default action (open as a link for some elements)
  e.preventDefault();

  if (!isFilled()) {
    dropArea.insertBefore(draggable, afterBox);
    make_undraggable();
    remove_box_events_after_drop();
    add_new_box();
    // console.log(`count: ${dropArea.childElementCount}`);
  } else {
    // remove the filled class
    dropArea.classList.remove("filled");
  }
});

// --------------------------------------------------------

// press "r" to remove the last element in the drop area
document.addEventListener("keydown", (e) => {
  if (e.shiftKey && e.code === "KeyR" && dropArea.childElementCount) {
    dropArea.lastChild.remove();
    console.log(`count: ${dropArea.childElementCount}`);
  }
});

// press "x" to remove all boxes
document.addEventListener("keydown", (e) => {
  if (e.shiftKey && e.code === "KeyX" && dropArea.childElementCount) {
    dropArea.innerHTML = "";
    // console.log(`count: ${dropArea.childElementCount}`);
  }
});

// clear the console "C" press
document.addEventListener("keydown", (e) => {
  if (e.shiftKey && e.code === "KeyC") console.clear();
});

let chameleonMode = false;
let boxes = null;
let intervalId;

const change_colors = () => {
  boxes.forEach((box) => set_color(box));
};

// event to play/pause the "chameleon" mode
document.addEventListener("keydown", (e) => {
  if (e.shiftKey && e.code === "KeyZ") {
    if (chameleonMode) {
      clearInterval(intervalId);
      chameleonMode = false;
    } else {
      boxes = dropArea.querySelectorAll(".box");
      intervalId = setInterval(change_colors, 250);
      chameleonMode = true;
    }
  }
});

// event to fill the dropArea with boxes
document.addEventListener("keydown", (e) => {
  if (e.shiftKey && e.code === "KeyF") fill_area();
});

// ex-1 end
//==================================================================================
//==================================================================================
//==================================================================================

// ex-2 start
//==================================================================================
//==================================================================================
//==================================================================================

const lists = document.getElementById("lists");
let dragging = null;
let dropList = null;

// list add
const addListBtn = document.getElementById("addListBtn");

const remove_item = (e) => {
  e.target.parentElement.remove();
};

const add_new_item = async (e) => {
  const new_item = document.createElement("div");
  new_item.className = "item";
  new_item.draggable = true;
  const color = await set_color(new_item);
  new_item.style.setProperty("--bg-col", color);

  new_item.innerHTML = `
    <button class="_remove" title="remove item">✖</button>
  `;

  // .add-new -> .list -> .items
  const items = e.target.parentElement.querySelector(".items");
  items.appendChild(new_item);

  new_item
    .querySelector("._remove")
    .addEventListener("click", remove_item, { once: true });

  new_item.addEventListener("dragstart", (e) => {
    dragging = e.target;
    dragging.classList.add("dragging");
    // make the current dropList is the current list
    dropList = dragging.parentElement.parentElement;
  });

  new_item.addEventListener("dragend", (e) => {
    dragging.classList.remove("dragging");
    dropList = null;
  });
};

const remove_list = (e) => {
  e.target.parentElement.remove();
};

const add_new_list = (e) => {
  const new_list = document.createElement("div");
  new_list.className = "list";
  new_list.innerHTML = `
    <button class="add-item" title="add list">+</button>
    <button class="_remove" title="remove list">✖</button>
    <div class="items"></div>
  `;

  lists.appendChild(new_list);

  // add new item event
  new_list
    .querySelector(".add-item")
    .addEventListener("click", add_new_item, false);

  new_list
    .querySelector("._remove")
    .addEventListener("click", remove_list, { once: true });

  new_list.addEventListener("dragenter", (e) => {
    dropList = new_list;
  });

  new_list.addEventListener("dragleave", (e) => {
    new_list.classList.remove("dragOver");
  });

  const get_after_item = (Y) => {
    const itemList = [...dropList.querySelectorAll(".item:not(.dragging)")];
    return itemList.reduce(
      (prevItem, currItem) => {
        const rect = currItem.getBoundingClientRect();
        const offset = Y - rect.y - (rect.height >>> 1);
        if (offset < 0 && offset > prevItem.offset) {
          return { offset: offset, afterItem: currItem };
        } else {
          return prevItem;
        }
      },
      { offset: Number.NEGATIVE_INFINITY, afterItem: null }
    ).afterItem;
  };

  new_list.addEventListener("dragover", (e) => {
    e.preventDefault();
    const items = dropList.querySelector(".items");
    items.insertBefore(dragging, get_after_item(e.clientY));
    new_list.classList.add("dragOver");
  });

  new_list.addEventListener("drop", (e) => {
    new_list.classList.remove("dragOver");
  });
};

addListBtn.addEventListener("click", add_new_list);

// ex-2 end
//==================================================================================
//==================================================================================
//==================================================================================
