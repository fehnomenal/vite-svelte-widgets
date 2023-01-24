<script lang="ts">
  import roboto from '@fontsource/roboto/latin.css?inline';

  // Break the string to mark import as used and to prevent unocss from inserting at the wrong location...
  const styles = '<st' + 'yle>' + roboto + '</style>';
</script>

<svelte:head>
  {@html styles}
</svelte:head>

<div class="font-sans">
  <slot />
</div>
