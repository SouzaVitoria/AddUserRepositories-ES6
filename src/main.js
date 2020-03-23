class App {
  constructor() {
    this.repositories = [];

    this.formEl = document.getElementById("repo-form");
    this.listEl = document.getElementById("repo-list");

    this.registerHandlers();
  }

  registerHandlers() {
    this.formEl.onsubmit = event => this.addRepository(event);
  }

  addRepository(event) {
    event.preventDefault();

    this.repositories.push({
      name: "UserRepositories-ES6",
      description: "Application add user repositories - Basic ES6",
      avatar_url:
        "https://avatars3.githubusercontent.com/u/48927627?s=460&u=1caf422619b7d1422bcc2220dead479a25f7ea7d&v=4",
      html_url: "https://github.com/SouzaVitoria"
    });

    this.render();
    console.log(this.repositories);
  }

  render() {
    this.listEl.innerHTML = "";

    this.repositories.forEach(repo => {
      let imgEl = document.createElement("img");
      imgEl.setAttribute("src", repo.avatar_url);

      let titleEl = document.createElement("strong");
      titleEl.appendChild(document.createTextNode(repo.name));

      let descriptionEl = document.createElement("p");
      descriptionEl.appendChild(document.createTextNode(repo.description));

      let linkEl = document.createElement("a");
      linkEl.setAttribute("target", "_blank");
      linkEl.setAttribute("href", repo.html_url);

      linkEl.appendChild(document.createTextNode("Acessar"));

      let listItemEl = document.createElement("li");

      listItemEl.appendChild(imgEl);
      listItemEl.appendChild(titleEl);
      listItemEl.appendChild(descriptionEl);
      listItemEl.appendChild(linkEl);

      this.listEl.appendChild(listItemEl);
    });
  }
}

new App();
