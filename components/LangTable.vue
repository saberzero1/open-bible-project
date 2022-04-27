<template>
  <div>
    <a href="/"><button>Back</button></a>
    <table>
      <thead>
        <tr>
          <th>
            link
          </th>
          <th>
            description
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(value, index) in links" :key="index">
          <td><a :href="value.url">{{ value.name }}</a></td>
          <td>{{ value.description }}</td>
        </tr>
      </tbody>
    </table>
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
