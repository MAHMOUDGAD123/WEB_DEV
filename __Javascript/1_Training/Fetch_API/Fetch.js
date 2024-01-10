"use strict";

// https://developer.mozilla.org/en-US/docs/Web/API/fetch
//=======================================================
// github example

(async () => {
  try {
    const url = new URL("https://api.github.com/users/MAHMOUDGAD123");

    const options = {
      method: "GET",
      headers: new Headers(),
      mode: "cors",
      credential: "omit",
      cache: "default",
      priority: "high",
      // mode....
    };

    const request = new Request(url, options);
    const response1 = await fetch(request);

    if (!response1.ok) throw new Error("Fetch_1 Error");

    const data1 = await response1.json();
    const response2 = await fetch(data1.repos_url);

    if (!response2.ok) throw new Error("Fetch_2 Error");

    const data2 = await response2.json();

    console.log(data2[0].name.toUpperCase());
  } catch (err) {
    console.log("ERROR:", err.message);
  }
})();

//=======================================================
