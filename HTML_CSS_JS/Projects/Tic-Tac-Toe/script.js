// Elements Start
// -------------------------------------------------

// scores
const x_score = document.getElementById("x-score");
const o_score = document.getElementById("o-score");

// controls
const play = document.getElementById("play");
const reset = document.getElementById("reset");
const clear = document.getElementById("clear");

// playing area elements
const play_box = document.getElementById("play-box");
const start_msg = document.getElementById("start-msg");
const end_game_msg = document.getElementById("end-game-msg");
const won_line = document.getElementById("won-line");
const home_but = document.getElementById("home");

// cells
const all_cells = document.querySelectorAll(".cell");
const _1 = document.getElementById("_1");
const _2 = document.getElementById("_2");
const _3 = document.getElementById("_3");
const _4 = document.getElementById("_4");
const _5 = document.getElementById("_5");
const _6 = document.getElementById("_6");
const _7 = document.getElementById("_7");
const _8 = document.getElementById("_8");
const _9 = document.getElementById("_9");

// Elements End
// -------------------------------------------------

// Data Start
// -------------------------------------------------

// whom turn now (0 -> x) | (1 -> o)
const icons = ["x", "o"];
let turn = 0; // x at start

// to count the filled cells
// only check if fill_count >= 5
let fill_count = 0;

// check if in game or not
let playing = false;

/*
 * "" -> empty
 * "x" -> X
 * "o" -> O
 */
const cells = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

// won-line positions & transformation
// position => [top, left, transform]
const won_line_pos = new Map([
  ["top", ["0", "50%", "translate(-50%, -50%)"]],
  ["r0", ["20%", "50%", "translate(-50%, -50%)"]],
  ["r1", ["50%", "50%", "translate(-50%, -50%)"]],
  ["r2", ["79%", "50%", "translate(-50%, -50%)"]],
  ["c0", ["50%", "19%", "translate(-50%, -50%) rotate(90deg)"]],
  ["c1", ["50%", "50%", "translate(-50%, -50%) rotate(90deg)"]],
  ["c2", ["50%", "81%", "translate(-50%, -50%) rotate(90deg)"]],
  ["crl", ["50%", "50%", "translate(-50%, -50%) rotate(45deg)"]],
  ["crr", ["50%", "50%", "translate(-50%, -50%) rotate(-45deg)"]],
]);
// row and column number for all cells
const index_map = new Map([
  [_1, [0, 0]],
  [_2, [0, 1]],
  [_3, [0, 2]],
  [_4, [1, 0]],
  [_5, [1, 1]],
  [_6, [1, 2]],
  [_7, [2, 0]],
  [_8, [2, 1]],
  [_9, [2, 2]],
]);

const cells_map = new Map([
  [
    "r0",
    [
      [0, 0],
      [0, 1],
      [0, 2],
    ],
  ],
  [
    "r1",
    [
      [1, 0],
      [1, 1],
      [1, 2],
    ],
  ],
  [
    "r2",
    [
      [2, 0],
      [2, 1],
      [2, 2],
    ],
  ],
  [
    "c0",
    [
      [0, 0],
      [1, 0],
      [2, 0],
    ],
  ],
  [
    "c1",
    [
      [0, 1],
      [1, 1],
      [2, 1],
    ],
  ],
  [
    "c2",
    [
      [0, 2],
      [1, 2],
      [2, 2],
    ],
  ],
  [
    "crl",
    [
      [0, 0],
      [1, 1],
      [2, 2],
    ],
  ],
  [
    "crr",
    [
      [0, 2],
      [1, 1],
      [2, 0],
    ],
  ],
]);

// Data end
// -------------------------------------------------

// functions Start
// -------------------------------------------------
const _switch_turn = () => {
  turn = turn ? 0 : 1;
};

const _switch_border = () => {
  if (turn) {
    x_score.style.borderColor = "transparent";
    o_score.style.borderColor = "#9bc6ff";
  } else {
    o_score.style.borderColor = "transparent";
    x_score.style.borderColor = "#9bc6ff";
  }
};

const set_play = () => {
  start_msg.style.display = "none";
  play_box.style.display = "unset";
  x_score.style.borderColor = "#9bc6ff";
  play.style.display = "none";
  reset.style.display = "unset";
  clear.style.display = "unset";
  home_but.style.top = "1em";
  playing = true;
};

const add_points = (winner) => {
  if (winner === "X") {
    x_score.dataset.score = +x_score.dataset.score + 1;
  } else {
    ++o_score.dataset.score;
  }
};

const set_line_pos = (pos) => {
  // pos => [top, left, transform]
  won_line.style.top = pos[0];
  won_line.style.left = pos[1];
  won_line.style.transform = pos[2];
};

const clear_all = () => {
  // remove children(icons)
  all_cells.forEach((cell) => {
    cell.innerHTML = "";
  });
  // empty all cells
  cells.forEach((row) => {
    row.fill("");
  });
  // put the border under X
  x_score.style.borderColor = "#9bc6ff";
  o_score.style.borderColor = "transparent";
  // hide the won-line & remove the message
  won_line.style.opacity = 0;
  set_line_pos(won_line_pos.get("top"));
  end_game_msg.textContent = "";
  // make it X turn
  turn = 0;
  fill_count = 0;
  playing = true;
  console.clear();
};

const reset_all = () => {
  clear_all();
  // zero all scores
  x_score.dataset.score = 0;
  o_score.dataset.score = 0;
};

// Check Algorithm Start
// -------------------------------------------------
/*
  - resolves:
    (0) no one won
    (1) x won
    (2) o won
*/
const analyse = (target) => {
  return new Promise((resolve) => {
    const T = cells_map.get(target);
    // [1] make sure that there's no empty cells
    if (T.every((i) => +cells[i[0]][i[1]])) {
      resolve(0); // one or more is empty
    }
    // [2] check if all are X
    if (T.every((i) => cells[i[0]][i[1]] === "x")) {
      resolve(1);
    }
    // [3] check if all are O
    if (T.every((i) => cells[i[0]][i[1]] === "o")) {
      resolve(2);
    }
    // no one won
    resolve(0);
  });
};

const who_won = async () => {
  for (const T of cells_map.keys()) {
    switch (await analyse(T)) {
      case 1:
        return { line_pos: T, win_msg: "X won", winner: "X" };
      case 2:
        return { line_pos: T, win_msg: "O won", winner: "O" };
    }
  }
  return null;
};

// Check Algorithms End
// -------------------------------------------------
const make_winner = async () => {
  if (fill_count >= 5) {
    const result = await who_won();
    if (result) {
      end_game_msg.textContent = result.win_msg;
      set_line_pos(won_line_pos.get(result.line_pos));
      won_line.style.opacity = 1;
      playing = false;
      add_points(result.winner);
      setTimeout(clear_all, 4000);
    } else if (fill_count === 9) {
      // check if all cells are filled (draw case)
      end_game_msg.textContent = "Draw";
      setTimeout(clear_all, 4000);
    }
    console.log("Checked!");
  } else {
    console.log("Not Checked!");
  }
};

const cell_on_click = (cell) => {
  if (playing && !cell.children.length) {
    console.log("---------------------");
    console.log("cell", cell.id, `- ${icons[turn].toUpperCase()}`);
    const index = index_map.get(cell);
    cells[index[0]][index[1]] = turn ? "o" : "x";
    cell.innerHTML = `<img src="./imgs/${icons[turn]}.png"/>`;
    _switch_turn();
    _switch_border();
    ++fill_count;
    make_winner();
    console.log("fill_count =", fill_count);
    console.log(cells);
    console.log("---------------------");
  }
};

// Functions End
// -------------------------------------------------

// events
// -------------------------------------------------

/* controls */

/* keyboard [keydown] events */
document.addEventListener("keydown", (e) => {
  if (playing) {
    switch (e.code) {
      case "Numpad7":
        cell_on_click(_1);
        break;
      case "Numpad8":
        cell_on_click(_2);
        break;
      case "Numpad9":
        cell_on_click(_3);
        break;
      case "Numpad4":
        cell_on_click(_4);
        break;
      case "Numpad5":
        cell_on_click(_5);
        break;
      case "Numpad6":
        cell_on_click(_6);
        break;
      case "Numpad1":
        cell_on_click(_7);
        break;
      case "Numpad2":
        cell_on_click(_8);
        break;
      case "Numpad3":
        cell_on_click(_9);
        break;
      case "KeyC":
        clear_all();
        console.log("clear");
        break;
      case "KeyR":
        reset_all();
        console.log("reset");
        break;
    }
  } else if (e.code === "KeyP") {
    set_play();
    console.log("play");
  }
});

play.addEventListener("click", () => {
  set_play();
  console.log("play");
});
play.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    set_play();
    console.log("play");
  }
});

clear.addEventListener("click", () => {
  if (playing) {
    clear_all();
    console.log("clear");
  }
});
clear.addEventListener("keydown", (e) => {
  if (playing &&  e.code === "Space") {
    clear_all();
    console.log("clear");
  }
});

reset.addEventListener("click", () => {
  if (playing) {
    reset_all();
    console.log("reset");
  }
});
reset.addEventListener("keydown", (e) => {
  if (playing && e.code === "Space") {
    reset_all();
    console.log("reset");
  }
});

/* mouse click on cells */
all_cells.forEach(cell => {
  cell.addEventListener('click', () => {
    cell_on_click(cell);
  });
});

// -------------------------------------------------
