<template>
  <div class="overscroll-auto overflow-x-hidden absolute top-0 left-0 min-h-screen w-full bg-gradient-to-b from-gray-800 to-gray-900">
    <div class="inline-block min-w-full overflow-x-hidden align-middle border-b shadow sm:rounded-lg">
      <a href="/"><button class="text-lg text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">Back</button></a>
      <table class="min-w-full table-auto border-collapse border border-slate-500 bg-opacity-0">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left uppercase">
              link
            </th>
            <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left uppercase">
              description
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(value, index) in links" :key="index" class="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
            <td class="px-6 py-4 font-medium text-gray-500 dark:text-gray-400 whitespace-no-wrap">
              <a class="font-medium text-blue-600 dark:text-blue-500 hover:underline" :href="value.url">
                {{ value.name }}
              </a>
            </td>
            <td class="px-6 py-4 font-medium text-gray-500 dark:text-gray-400 whitespace-no-wrap">
              {{ value.description }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LangTable',
  props: {
    language: {
      type: String,
      required: true
    }
  },
  data: () => ({
    links: [],
    length: 0
  }),
  async fetch () {
    this.links = await this.$content(this.language).only('link').fetch()
    this.links = this.links.link
    this.length = Object.keys(this.links).length
  }
}
</script>
