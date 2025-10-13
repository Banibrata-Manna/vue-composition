# dojo-blog

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Refs vs. Reactive


| Aspect | `ref()` | `reactive()` |
|:--------|:---------|:-------------|
| **Purpose** | Creates a **reactive reference** to a single primitive or object value. | Converts an **object (or array)** into a deeply reactive proxy. |
| **Data Type** | Works with **any type**, but mainly for **primitive values** (string, number, boolean). | Works only with **objects and arrays**. |
| **Accessing Value** | Must use `.value` to get/set the underlying value. | No `.value` needed — you access properties directly. |
| **Reactivity Depth** | Automatically unwraps nested refs but not objects — shallow for objects unless wrapped again. | Deeply reactive — all nested properties become reactive. |
| **Destructuring** | Loses reactivity when destructured (unless using `toRefs()` or `storeToRefs()`). | Also loses reactivity when destructured (can use `toRefs()` for preservation). |
| **Unwrapping in Templates** | `.value` not needed in `<template>` (auto unwrapped). | Access properties normally — behaves like a plain object. |
| **When to Use** | For simple **primitive values** or when you want a single reactive variable. | For **complex objects or state**, e.g., reactive stores or forms. |