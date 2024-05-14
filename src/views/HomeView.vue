<template>
    <div>
        <profile/>
        <project class="mt-60"/>
    </div>
</template>

<script>
import profile from '../views/ProfileView.vue'
import project from '../views/ProjectView.vue'

export default {
    name: 'HomePage',
    components: {
        profile,
        project
    }
}
</script>