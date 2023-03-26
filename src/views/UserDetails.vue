<template>
    <div>
        <Header></Header>
        <div class="containerProfile">
            <div class="containerInfo">
                <div class="myProfile">
                    <span>User Profile</span>
                </div>
                <div class="containerUser">
                    <div class="infoTitle">
                        <span> Name: </span>
                        <span> User name: </span>
                        <span> Email: </span>
                        <span> Website: </span>
                        <span> Phone: </span>
                        <span> Compay name: </span>
                        <span> Compay bs: </span>
                        <span> Compay catchphrase: </span>
                        <span> Address street </span>
                        <span> Address geolocation </span>
                    </div>
                    <div class="infoUser">
                        <span> {{ userDetails.name }} </span>
                        <span> {{ userDetails.username }} </span>
                        <span> {{ userDetails.email }} </span>
                        <span> {{ userDetails.website }} </span>
                        <span> {{ userDetails.phone }} </span>
                        <span> {{ userDetails.company.name }} </span>
                        <span> {{ userDetails.company.bs }} </span>
                        <span> {{ userDetails.company.catchPhrase }} </span>
                        <span> {{ userDetails.address.street }}, {{ userDetails.address.suite }}, {{
                            userDetails.address.city }}, {{ userDetails.address.zipcode }}
                        </span>
                        <span>{{ userDetails.address.geo.lat }}, {{ userDetails.address.geo.lng }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import Header from "../components/Header.vue"
import api from "../services/index"
export default {
    name: "UserDetails",
    components: {
        Header,
    },

    data() {
        return {
            userDetails: [],
            id: this.$route.params.id,
        };
    },

    async mounted() {
        await this.getUserDetails()
    },

    methods: {
        async getUserDetails() {
            const response = await api.get(`/users/${this.id}`);
            this.userDetails = response.data;
        },
    },
};
</script>
  
<style scoped>
.containerProfile {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.containerInfo {
    width: 80%;
    background-color: #fff;
    border-radius: 20px;
}

.myProfile {
    width: 100%;
    height: 69px;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    background-color: #fff;
    color: #071f4c;
    font-size: 24px;
    border: 3px solid #17e28a;
    border-radius: 20px;
}

.myProfile>span {
    margin-left: 22px;
}

.containerUser {
    display: flex;
    justify-content: center;
    align-items: center;
}

.infoTitle {
    display: flex;
    flex-direction: column;
    margin-top: 25px;
    width: 35%;
    justify-content: center;
}

.infoUser {
    display: flex;
    flex-direction: column;
    margin-top: 25px;
    width: 55%;
    justify-content: center;
}

.infoUser>span,
.infoTitle>span {
    margin-bottom: 15px;
    text-align: left;
    color: #071f4c;
    font-size: 18px;
}

@media only screen and (max-width: 525px) {
    .containerInfo {
        width: 100%;
    }
}
</style>
  