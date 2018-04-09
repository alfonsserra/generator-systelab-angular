
# `<%= title %>` — Project description

## Getting Started

To get you started you can simply clone the `<%= title %>` repository and install the dependencies:

### Prerequisites

You need [git][git] to clone the `<%= title %>` repository.

You will need [Node.js][node] and [npm][npm].

### Clone `<%= title %>`

Clone the `<%= title %>` repository using git:

```bash
git clone https://github.com/<%= account %>/<%= title %>.git
cd <%= title %>
```

If you just want to start a new project without the `<%= title %>` commit history then you can do:

```bash
git clone --depth=1 https://github.com/<%= account %>/<%= title %>.git <your-project-name>
```

The `depth=1` tells git to only pull down one commit worth of historical data.

### Install Dependencies

To install the dependencies you must run:

```bash
npm install
```
### Run

To run the application use the following command:

```bash
ng serve
```

In order to login, you need a backend. A JEE Backend is implemented in the https://github.com/systelab/seed-jee repository. A .net Backend is implemented in the https://github.com/systelab/seed-dotnet repository.

<% if (e2e) { %>

## Docker

### Build docker image


You can always manually create the image with the following command:

```bash
docker build -t <%= account %>/<%= title %> .
```

The image created, will contain a [nginx server][nginx] with the application files.

Nginx (pronounced engine-x) is a free, open-source, high-performance HTTP server and reverse proxy, as well as an IMAP/POP3 proxy server. It's known for its high performance, stability, rich feature set, simple configuration, and low resource consumption.

As of September 2015, Nginx hosts nearly 12.18% (22.2M) of active sites across all domains. It powers several high-visibility sites, such as Netflix, Hulu, Pinterest, Cloudflare, Airbnb, WordPress.com, GitHub, ...

You can easily tweak the nginx config in [nginx/default.conf](nginx/default.conf), for example to [configure the server as https](http://nginx.org/en/docs/http/configuring_https_servers.html)

### Run the container

```bash
docker run -d -p 8081:80 <%= account %>/<%= title %>
```

The app will be available at http://localhost:8081

In order to change the backend server, you can set the variable BACKEND, for example:

```bash
docker run -d -e BACKEND='http://www.dep.com:8080' -p 8081:80 <%= account %>/<%= title %>
```

If not set, the default value will be http://localhost:8080

<% } %>


[git]: https://git-scm.com/
[npm]: https://www.npmjs.com/
[node]: https://nodejs.org
[Angular]: https://angular.io/
[nginx]: https://nginx.org/
