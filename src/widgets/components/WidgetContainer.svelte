<script lang="ts">
  import roboto from '@fontsource/roboto/latin.css?inline';

  // Break the string to mark import as used and to prevent unocss from inserting at the wrong location...
  const styles = '<st' + 'yle>' + roboto + '</style>';
</script>

<svelte:head>
  {@html styles}
</svelte:head>

<div class="font-sans shadow-lg m-10 p-3 rounded-xl bg-gray-100">
  <slot />
</div>

<style uno:preflights uno:safelist></style>
