<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();


  const onClickHandler = () => {
    dispatch('cokolwiek', {title, url})
  }

  export let lp;
  export let title = "ala ma kota";
  export let abstract = "ala ma kota";
  export let img = "http://placeimg.com/640/480/technics";
  export let url = "#product";
</script>

<div class="border border-stone-200 shadow-sm hover:shadow-lg pb-4" on:click|once={onClickHandler}>
  <img src={img} alt="" />
  <h3 class="font-medium text-lg px-4 py-2 text-black uppercase line-clamp-2 h-16">{lp} {title}</h3>
  <div class="text-sm px-4 text-stone-900">{@html abstract}</div>
</div>
