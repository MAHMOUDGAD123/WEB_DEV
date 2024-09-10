class Router {
  /**@type {HTMLElement} */
  #targetNode = null;
  /**@type {string} */
  #currentRoute = "";

  /**
   * @param {string} name router name
   * @param {[string, string][]} routes routes array => [route, element][]
   * @param {string} target the id of the DOM node to render components in it
   * @info route elements (links) must have { data-route } attribute
   */
  constructor(name, routes, targetId) {
    this.name = name;
    this.routes = new Map(routes);
    this.targetId = targetId;
    this.#targetNode = document.getElementById(this.targetId);
  }

  #init() {
    const route = window.location.pathname || "/";
    const linkEle = document.querySelector(`[route='${route}']`);

    window.history.pushState({}, "", `${route}`);
    this.#targetNode.innerHTML = this.routes.get(route);
    linkEle.classList.add("active");
    this.#currentRoute = route;

    // add events to all links
    this.routes.forEach((_, route) => {
      document
        .querySelector(`[route='${route}']`)
        .addEventListener("click", (e) => {
          this.#navigate(e.target);
        });
    });
  }

  /**
   * @param {HTMLElement} clickedLinkEle the clicked Element
   */
  #navigate(clickedLinkEle) {
    const currentRoute = this.#currentRoute;
    const newRoute = clickedLinkEle.attributes.route.value;

    if (currentRoute === newRoute) return;

    const previousLinkEle = document.querySelector(`[route='${currentRoute}']`);

    window.history.pushState({}, "", newRoute);
    this.#targetNode.innerHTML = this.routes.get(newRoute);
    previousLinkEle.classList.remove("active");
    clickedLinkEle.classList.add("active");
    this.#currentRoute = newRoute;

    console.log(newRoute, "Link Clicked");
  }

  run() {
    this.#init();

    // (popstate) event to detect window.history navigate back
    window.addEventListener("popstate", () => {
      const previousRoute = window.location.pathname;
      console.log("previousRoute:", previousRoute);

      if (previousRoute) {
        const previousRouteEle = document.querySelector(
          `[route='${previousRoute}']`
        );
        const currentRouteEle = document.querySelector(
          `[route='${this.#currentRoute}']`
        );

        this.#targetNode.innerHTML = this.routes.get(previousRoute);

        currentRouteEle.classList.remove("active");
        previousRouteEle.classList.add("active");
        this.#currentRoute = previousRoute;
      }
    });
  }
}

export { Router };
