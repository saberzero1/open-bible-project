<template>
    <table id="fresh-table" class="table">
        <thead>
            <th data-field="Link">Link</th>
            <th data-field="Description">Description</th>
        </thead>
        <tbody>
            <tr v-for="item in items" :key="item.url">
                <td><a href="{{ item.url }}">{{ item.name }}</a></td>
                <td>{{ item.description }}</td>
            </tr>
        </tbody>
    </table>
</template>

    <script>
    export default {
        data() {
            return {
                items: []
            }
        },
        async fetch() {
            this.items = await fetch(
                'links.json'
            ).then(res => res.json())
        }
    }
</script>