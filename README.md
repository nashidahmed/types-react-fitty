# @types/react-fitty

TypeScript type definitions for [react-fitty](https://github.com/josephuspaye/react-fitty).

## Installation

```sh
npm install --save-dev @types/react-fitty
```

or with yarn:

```sh
yarn add --dev @types/react-fitty
```

## Usage

```tsx
import { ReactFitty } from "react-fitty";

const Example = () => {
  return (
    <ReactFitty minSize={10} maxSize={100}>
      Hello World
    </ReactFitty>
  );
};
```

## API

### `FittyProps`

| Prop               | Type                   | Description                                      |
| ------------------ | ---------------------- | ------------------------------------------------ |
| `minSize`          | `number`               | Minimum font size in pixels.                     |
| `maxSize`          | `number`               | Maximum font size in pixels.                     |
| `multiLine`        | `boolean`              | Whether multiple lines should be fitted.         |
| `observeMutations` | `MutationObserverInit` | Mutation observer options for detecting changes. |

## Contributing

If you find any issues with these types, feel free to submit a PR or open an issue.

## License

[MIT](LICENSE)
