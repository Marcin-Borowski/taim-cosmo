<script>
  import Editor from "@tinymce/tinymce-svelte";
  import Select from "svelte-select";

  const tinyAPIKey = "4b6bger31647td3h1yfxqcx481wvcu8etenxrzcr3znwxpip";

  export let form;

  let title;
  let abstract;
  let content;
  let date = new Date();
  let author;

  export let data;
  const { posts, authors } = data;

  const formAuthors = authors.map((item) => {
    return {
      id: item.id,
      label: `${item.firstname} ${item.lastname}`,
    };
  });

  const onSave = async () => {};
</script>

{#if form?.success}
  <div class="w-1/3 bg-green-400 border-2 border-green-800 text-white mx-auto p-4 text-center my-4">Dane zapisano! {form?.post.id}</div>
{/if}

<form method="POST" action="?/create" class="mx-auto max-w-3xl bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
  <div class="mb-4">
    <label for="title" class="block text-gray-700 text-sm font-bold mb-2">Title</label>
    <input name="title" type="text" class="form-input shadow appearance-none border border-stone-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" bind:value={title} />
  </div>
  <div class="mb-4">
    <label for="abstract" class="block text-gray-700 text-sm font-bold mb-2">Abstract</label>
    <textarea name="abstract" bind:value={abstract} class="form-input shadow appearance-none border border-stone-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
  </div>
  <div class="mb-4">
    <label for="content" class="block text-gray-700 text-sm font-bold mb-2">Content</label>
    <Editor apiKey={tinyAPIKey} bind:value={content} />
    <input type="hidden" name="content" value={content} />
  </div>
  <div class="flex space-x-4">
    <div class="mb-4">
      <label for="content" class="block text-gray-700 text-sm font-bold mb-2">Date</label>
      <input type="date" name="date" bind:value={date} class="form-input shadow appearance-none border border-stone-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
    </div>
    <div class="mb-4 w-full themed">
      <label for="content" class="block text-gray-700 text-sm font-bold mb-2">Author</label>
      <Select placeholder="Wybierz autora…" items={formAuthors} bind:value={author} />
      <input type="hidden" name="author_id" value={author?.id} />
    </div>
    <div class="mb-4">
      <button class="form-input shadow appearance-none border border-stone-300 rounded w-full py-2 px-3 bg-gray-700 text-white leading-tight focus:outline-none focus:shadow-outline mt-7">Zapisz</button>
    </div>
  </div>
</form>

<hr />

<ul class="space-y-4 mx-auto max-w-2xl my-5">
  {#each posts as { title, abstract }}
    <li class="border border-stone-400 shadow-md px-4 py-2">
      <h2 class="text-lg">{title}</h2>
      <div class="text-sm text-stone-500">{abstract}</div>
    </li>
  {/each}
</ul>

<style>
  .themed {
    --height: 38px;
    --inputFontSize: 14px;
  }
</style>
