<script>
  let c = 0;
  let d = 0;

  $: double = c*d;


  const onClick = () => {
    c++;
    d--;
  }
</script>


<div class="text-center">
<div>o nas {c} - {double}</div>


<button class="text-3xl" on:click={onClick}>+</button></div>