<script>
    import conf from '../conf';
    export default {
        data: () => ({
            items: []
        }),
        async fetch() {
            this.items = await this.$content(conf.CONTENT).fetch()
        }
    }
</script>

<template>
    <table>
        <thead>
            <th>Link</th>
            <th>Description</th>
        </thead>
        <tbody>
            <tr :v-for="item in items">
                <td><a :href=item.url>{{ item.name }}</a></td>
                <td>{{ item.description }}</td>
            </tr>
        </tbody>
    </table>
</template>