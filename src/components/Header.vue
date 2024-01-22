<template>
    <div class="navbar bg-base-100 sticky top-0">
        <div class="navbar-start">
            <div class="dropdown">
                <label tabindex="0" class="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                        <section class="buttons">
                            <div class="container">
                                <a href="#Profile" class="button btn-2">Profile</a>
                            </div>
                        </section>
                    </li>
                    <li>
                        <section class="buttons">
                            <div class="container">
                                <a href="#Project" class="button btn-2">Project</a>
                            </div>
                        </section>
                    </li>
                    <li>
                        <section class="buttons">
                            <div class="container">
                                <a href="#Contact" class="button btn-2">Contact</a>
                            </div>
                        </section>
                    </li>
                </ul>
            </div>
            <div class="typewriter">
                <a href="#" class="btn btn-ghost normal-case text-xl typewriter"><h1>Hello, welcome to my portofolio</h1></a>
            </div>
        </div>
        <div class="navbar-center hidden lg:flex">
            <ul class="menu menu-horizontal px-1">
                <li>
                    <section class="buttons">
                        <div class="container">
                            <a href="#Profile" class="button btn-2">Profile</a>
                        </div>
                    </section>
                </li>
                <li>
                    <section class="buttons">
                        <div class="container">
                            <a href="#Project" class="button btn-2">Project</a>
                        </div>
                    </section>
                </li>
                <li>
                    <section class="buttons">
                        <div class="container">
                            <a href="#Contact" class="button btn-2">Contact</a>
                        </div>
                    </section>
                </li>
            </ul>
        </div>
<!-- PROFILE PICTURE -->
        <div class="navbar-end ">
            <div class="dropdown dropdown-end">
                <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                    <div class="w-10 rounded-full">
                    <img src="../assets/profil.jpg" />
                    </div>
                </label>
                <ul tabindex="0" class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                    <li>
                    <a class="justify-between">
                        Profile
                        <span class="badge">New</span>
                    </a>
                    </li>
                    <li><a>Settings</a></li>
                    <li><a>Logout</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script scoped>
export default {
    name: 'Header'
}
</script>

<style scoped lang="scss">
/* DEMO-SPECIFIC STYLES */
.typewriter h1 {
  color: #fff;
  font-family: monospace;
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: .15em solid orange; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: .15em; /* Adjust as needed */
  animation: 
    typing 3.5s steps(30, end),
    blink-caret .5s step-end infinite;
}

/* The typing effect */
@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: orange }
}

.container { 
    align-items: center;
    flex-direction: column;
    justify-content: center;
    text-align: center; 
    
    @media (min-width: 600px) {
        flex-direction: row;
        justify-content: space-between;
    }
}

.button {
    box-sizing: inherit;
    transition-property: all;
    transition-duration: .6s;
    transition-timing-function: ease;
    color: #fff;
    cursor: pointer;
    line-height: 45px;
    max-width: 160px; 
    position: relative;
    text-decoration: none;
    text-transform: uppercase;
    width: 100%; 
    
    &:hover { text-decoration: none; }
}

.btn-2 {
    letter-spacing: 0;
    padding: 0;
}

.btn-2:hover,
.btn-2:active {
  letter-spacing: 5px;
}

.btn-2:after,
.btn-2:before {
  backface-visibility: hidden;
  border: 1px solid rgba(#fff, 0);
  bottom: 0px;
  content: " ";
  display: block;
  margin: 0 auto;
  position: relative;
  transition: all 280ms ease-in-out;
  width: 0;
}

.btn-2:hover:after,
.btn-2:hover:before {
  backface-visibility: hidden;
  border-color: #fff;
  transition: width 350ms ease-in-out;
  width: 70%;
}

.btn-2:hover:before {
  bottom: auto;
  top: 0;
  width: 70%;
}
</style>