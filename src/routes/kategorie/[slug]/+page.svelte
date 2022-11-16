<script>
  import { onMount } from "svelte";

  export let data;

  const { category, products } = data;

  let name = "";
  let input;
  
  const onClickHandler = () => {
    name = "cokolwiek";
  }

  onMount(() => {
    input.focus();
  })
</script>

<h1>{category.name}</h1>
<div class="text-base">
  {@html category.abstract}
</div>

{#each products as product}
  <div>{product.name}</div>
{:else}
  <div class="text-base text-center">Brak produktów w tej kategorii</div>
{/each}


<div class="p-4 flex justify-between">
  <input bind:this={input} bind:value={name} type="text" class="px-2 border border-slate-300">
  {name}

  <button class="bg-slate-900 text-white px-2 py-2" on:click={onClickHandler}>SET</button>
</div>