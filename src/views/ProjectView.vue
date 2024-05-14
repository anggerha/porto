<template>
    <div id="Project" class="self-center">
        <h1 class="text-5xl m-20">P R O J E C T</h1>
        <div class="place-items-center grid grid-cols-2 mt-5 m-20">
            <!-- CARD 1 -->
            <div v-for="item in project" :key="item.id">
                <div :data-aos="item.animation" data-aos-duration="700" data-aos-easing="ease-in-sine" class="card w-[36rem] bg-base-100 shadow-xl">
                    <figure><img :src="item.image" :alt="item.title + 'picture'" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">{{ item.title }}</h2>
                        <p>{{ item.description }}</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary"><a :href="item.link" target="_blank">Check Now</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Project',
    data() {
        return {
            project: [
                { 
                    id: 1, 
                    image: require('../assets/Project/AmigoAdmin.png'),
                    title: 'Amigo Admin Web',
                    description: 'Deskripsi menyusul . . . ',
                    link: 'https://adminpaylater.amigogroup.id/',
                    animation: 'fade-right'
                },
                { 
                    id: 2, 
                    image: require('../assets/Project/AmigoAmaps.png'),
                    title: 'Amigo Member Apps',
                    description: 'Deskripsi menyusul . . . ',
                    link: 'https://app.amigogroup.id/',
                    animation: 'fade-down'
                },
                { 
                    id: 3, 
                    image: require('../assets/Project/LAI.png'),
                    title: 'Lembaga Alkitab Indonesia',
                    description: 'Deskripsi menyusul . . . ',
                    link: 'https://weblai.alkitab.or.id/',
                    animation: 'fade-up'
                },
                { 
                    id: 4, 
                    image: require('../assets/Project/Portal.png'),
                    title: 'Portal Budaya Indonesia',
                    description: 'Deskripsi menyusul . . . ',
                    link: 'https://portal.alunalun.info/',
                    animation: 'fade-left'
                },
            ]
        }
    }
}
</script>