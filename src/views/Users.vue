<template>
    <div>
        <Header></Header>
        <div class="containerTop">
            <div class="containerInfo">
                <div class="infos">
                    <h4>Usuários cadastrados:</h4>
                    <span>{{ userQtd }}</span>
                </div>
            </div>
            <div class="users-table">
                <div class="row headElements">
                    <div class="element">Username</div>
                    <div class="element">Email</div>
                    <div class="element">Phone</div>
                    <div class="element">Website</div>
                    <div class="element">#</div>
                </div>
                <div>
                    <div v-for="(user, index) in userList" :key="index" class="row bodyElements">
                        <div class="element">{{ user.name }}</div>
                        <div class="element">{{ user.email }}</div>
                        <div class="element">{{ user.phone }}</div>
                        <div class="element">{{ user.website }}</div>
                        <div class="element">
                            <b-button @click="goToDetails(user.id)" class="button"> Details </b-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import api from '../services/index'
import Header from "../components/Header.vue"

export default {
    name: "Users",

    components: {
        Header
    },

    data() {
        return {
            userList: [],
            userQtd: null,
        };
    },

    async mounted() {
        await this.getUserList()
    },

    methods: {
        async getUserList() {
            const response = await api.get("/users");
            this.userList = response.data;
            this.userQtd = this.userList.length;
        },
        goToDetails(id) {
            this.$router.push({ name: "UserDetails", params: { id } });
        },
    },
};
</script>

<style scoped>
.containerTop {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
}

.containerInfo {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.infos {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.infos>h4 {
    letter-spacing: 2px;
    color: white;
    font-weight: 600;
}

.infos>span {
    font-size: 28px;
    letter-spacing: 2px;
    font-weight: 600;
    color: white;
}

.users-table {
    display: flex;
    flex-direction: column;
    background-color: white;
    width: 90%;
}

.headElements {
    display: flex;
    flex-direction: row;
    font-weight: 600;
    font-size: 25px;
}

.bodyElements {
    display: flex;
    flex-direction: row;
}

.element {
    width: 20%;
    overflow: hidden;
    padding: 10px 5px;
}

.button {
    background-color: #1755ca;
    font-weight: 600;
}

@media only screen and (max-width: 768px) {
    .bodyElements {
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .element {
        width: 80%;
        display: flex;
        justify-content: center;
        padding: 10px 5px;
    }

    .users-table {
        width: 60%;
        font-weight: 600;
    }

    .headElements {
        display: none;
    }
}
</style>