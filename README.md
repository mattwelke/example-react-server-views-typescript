# example-react-server-views-typescript

Finished code for the [Strongly-Typed, Server-Rendered Views with React and TypeScript](https://mattwelke.com/2018/03/11/strongly-typed-server-rendered-views-with-react-and-typescript.html) blog post.

## Setup

1. Make sure you've got Node.js installed on your machine. [n](https://github.com/tj/n) is a great way to do that.
1. In the project directory, run `yarn` or `npm install`.
1. In the project directory, run `./node_modules/typescript/bin/tsc` to compile the app.
1. In the project directory, run `node dist/main.js` to run the app.

Note that IDEs such as Visual Studio Code and WebStorm will perform certain steps that will make some of the above steps unneccessary. When in doubt, consult the documentation for your tools.

### Windows Issues

Note that Windows users may have trouble running the TypeScript compiler from the command line, unless they choose to install TypeScript globally on their system. In my experience, the default build task that Visual Studio Code produces for TypeScript Node.js projects will do the trick. If you use Visual Studio Code on Windows, use the keyboard shortcut `ctrl-shift-b` and hit `enter`, or run the task through the appropriate menu option. WebStorm will also work, but make sure to remove the `"esModuleInterop": true` property from the `tsconfig.json` if present due to a limitation in WebStorm.

## Help

Any issues running it? Open an issue!
