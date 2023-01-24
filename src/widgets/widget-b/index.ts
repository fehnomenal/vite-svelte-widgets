import App from './App.svelte';

const target = window['widget-b'] as HTMLScriptElement;

new App({
  target: target.parentElement,
  anchor: target,
});
