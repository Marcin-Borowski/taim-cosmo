<script>
  import Section from "$lib/components/Section.svelte";
  export let data;

  let { categories } = data;
</script>

<Section title="Dostępne kategorie">
  <div class="grid grid-cols-4 gap-2">
    {#each categories as item}
    <div class="border border-stone-400 p-8">
      <a href={`/kategorie/${item.slug}`}>{item.name}</a>
    </div>
    {/each}
  </div>
</Section>
