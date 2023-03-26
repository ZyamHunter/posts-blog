<template>
    <header class="flex">
        <div @click="showMenu()" class="home flex">
            <b-iconstack font-scale="1.3" style="margin-right: 10px;">
                <b-icon icon="menu-button-wide-fill" aria-hidden="true" variant="dark"
                    @click="modalShow = !modalShow"></b-icon>
            </b-iconstack>
            <span>Menu</span>

            <nav class="home-menu" @click="showMenu()">
                <div class="containerButtons">
                    <router-link to="/" class="nav_item">
                        Posts
                    </router-link>

                    <router-link to="/Users" class="nav_item">
                        Users
                    </router-link>
                </div>
            </nav>
        </div>
    </header>
</template>
  
<script>
export default {
    name: "Header",

    data() {
        return {};
    },

    methods: {
        showMenu() {
            const myLinks = document.querySelector(".home-menu");
            if (myLinks.style.display === "block") {
                myLinks.style.display = "none";
            } else {
                myLinks.style.display = "block";
            }
        },
    },
};
</script>
  
<style scoped>
header>div:last-child {
    border-radius: 20px 0px 0px 20px;
    cursor: pointer;
}

.flex {
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-end;
    height: 100px;
    align-items: center;
}

.home {
    background-color: #17e28a;
    color: #fff;
    border-radius: 20px 0px 0px 20px;
    height: 70px;
    min-width: 250px;
    position: relative;
    cursor: pointer;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    align-items: center;
    justify-content: center;
}

.home-menu {
    display: none;
    position: absolute;
    top: 100%;
    width: 100%;
    z-index: 999;
    background-color: #17e28a;
    border-radius: 10px 0px 0px 10px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25) inset;
}

.home-menu span {
    padding: 10px;
}

.home-menu .containerButtons {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 12px;
}

.home-menu .nav_item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 175px;
    height: 48px;
    text-decoration: none;
    color: #071f4c;
    margin: 0 auto 12px;
    font-size: 14px;
    border-radius: 20px;
    transition: all 0.5s ease-in-out;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
    background-color: #17e28a;
    border: 2px solid #fff;
}

.home-menu .nav_item:hover {
    background-color: #071f4c;
    color: #fff;
}

.home-menu a:first-child {
    margin-top: 10px;
}
</style>
  