# Porcelain

A Matrix client built to enhance the user experience of me and me in particular.

Im a bit new to typescript so do forgive me if any changes I make are shit.

Join my matrix space [here](https://matrix.to/#/#porcelain:dollth.ing) to discuss features/issues or ask questions.

Forked from [Sable](https://github.com/sableapp/sable), which is forked from [Cinny](https://github.com/cinnyapp/cinny/).

## Getting started
I server a development version at [porcelain.dollth.ing](https://porcelain.dollth.ing) for testing if you wish to check it out, please don't use this as your main client I don't have the best server

Otherwise I reccomend hosting yourself if you wish to use the added features which you can see options for below <3

## Self-hosting
You have a few options for self hosting, you can:
1. Run the prebuilt docker container.
2. Build it yourself.

### Docker

Prebuilt images are published to `ghcr.io/dollth-ing/porcelain`.

- `latest` tracks the current `dev` branch image.
- `X.Y.Z` tags are versioned releases.
- `X.Y` tags float within a release line.
- Pushes to `dev` also publish a short commit SHA tag.

Run the latest image with:

```sh
docker run --rm -p 8067:8080 ghcr.io/dollth-ing/porcelain:latest
```

Then open `http://localhost:8067`.

If you want to override the bundled [`config.json`](config.json), mount your own
file at `/app/config.json`:

```yaml
services:
  porcelain:
    image: ghcr.io/dollth-ing/porcelain:latest
    ports:
      - '8080:8080'
    volumes:
      - ./config.json:/app/config.json:ro
```

### Build it yourself

To build and serve Porcelain yourself with nginx, clone this repo and build it:

```sh
pnpm i # Installs all dependencies
pnpm run build # Compiles the app into the dist/ directory
```

After that, you can copy the dist/ directory to your server and serve it.

* In the [`config.json`](config.json), you can modify the default homeservers, feature rooms/spaces, toggle the account switcher, and toggle experimental simplified slilding sync support.

* To deploy on subdirectory, you need to rebuild the app youself after updating the `base` path in [`build.config.ts`](build.config.ts).
    * For example, if you want to deploy on `https://dollth.ing/app`, then set `base: '/app'`.

## Local development
> [!TIP]
> We recommend using a version manager as versions change quickly. [fnm](https://github.com/Schniz/fnm) is a great cross-platform option (Windows, macOS, and Linux). [NVM on Windows](https://github.com/coreybutler/nvm-windows#installation--upgrades) and [nvm](https://github.com/nvm-sh/nvm) on Linux/macOS are also good choices. Use the version defined in [`.node-version`](.node-version).

Execute the following commands to start a development server:
```sh
fnm use --corepack-enabled # Activates the Node version and enables corepack
# If you not using fnm, install corepack manually: npm install --global corepack@latest
corepack install # Installs the pnpm version specified in package.json
pnpm i # Installs all dependencies
pnpm run dev # Serve a development version
```

To build the app:
```sh
pnpm run build # Compiles the app into the dist/ directory
```

## Deployment and infrastructure
Deployment workflows and infrastructure details live in
[`infra/README.md`](infra/README.md).
