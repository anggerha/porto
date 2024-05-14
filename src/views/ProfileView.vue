<template>
    <div id="Profile">
        <div class="text-2xl mt-10 mb-16">
            <p>This website is my portofolio. I created this website to record my experiences in creating projects and develop my skills to become a web developer.</p>
        </div>
        <div class="place-items-center grid grid-cols-1 mt-5 m-10">
            <div data-aos="flip-right" data-aos-duration="1500" data-aos-easing="ease-in-sine" data-aos-offset="0">
                <div id="card" class="card card-side bg-base-100 shadow-xl">
                    <figure class="max-w-[40rem]">
                        <img src="../assets/profil.jpg" alt="Movie"/>
                    </figure>
                    <div class="card-body self-center">
                        <h1 class="card-title">
                            <a href="#" class="effect-shine text-4xl">Hello my full name is Angger Herlambang Amandegani, but U can call me Angger</a>
                        </h1>
                        <!-- <h1 class="card-title text-4xl">Hello my full name is Angger Herlambang Amandegani, but U can call me Angger</h1> -->
                        <div class="card-actions fixed m-4 absolute bottom-0 right-0">
                            <button class="btn btn-ghost p-1">
                                <a href="https://www.facebook.com/anggerh118/" target="_blank">
                                    <i class="fa fa-facebook-square" id="facebook" aria-hidden="true"></i>
                                </a>
                            </button>
                            <button class="btn btn-ghost p-1">
                                <a href="https://www.instagram.com/angger_herlambang/" target="_blank">
                                    <i class="fa fa-instagram" id="instagram" aria-hidden="true"></i>
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-24">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint a dolorem, optio atque, tenetur ipsa veritatis fugiat voluptas commodi inventore dolorum, sed architecto. Totam iste perferendis rem ullam facere dolore.</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Profile'
}
</script>

<style scoped>
h1 a {
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 6px;
  display: inline-block;
  position: relative;
  -webkit-mask-image: linear-gradient(-75deg, rgba(0,0,0,.6) 30%, #000 50%, rgba(0,0,0,.6) 70%);
  -webkit-mask-size: 200%;
  animation: shine 5s linear infinite;
}

@keyframes shine {
  from { -webkit-mask-position: 150%; }
  to { -webkit-mask-position: -50%; }
}

#instagram {
    background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 3rem;
}
#facebook {
    color: #3b5998;
    background-image: linear-gradient( to bottom, transparent 20%, white 20%, white 93%, transparent 93% );
    background-size: 55%;
    background-position: 70% 0;
    background-repeat: no-repeat;
    font-size: 3rem;
}
</style>