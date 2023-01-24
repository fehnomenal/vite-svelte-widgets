import App from './App.svelte';

const target = window['widget-a'] as HTMLScriptElement;

new App({
  target: target.parentElement,
  anchor: target,
});
