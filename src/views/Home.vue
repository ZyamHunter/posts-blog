<template>
    <div>
        <div class="post-list">
            <div v-for="(post, index) in postList" :key="index" class="post">
                <h2>{{ post.title }}</h2>
                <p>{{ post.body }}</p>
            </div>
        </div>
    </div>
</template>
  
<script>
import api from "../services/index"

export default {
    name: "Home",

    data() {
        return {
            postList: [],
        };
    },

    async mounted() {
        await this.getPostList()
    },

    methods: {
        async getPostList() {
            const response = await api.get("/posts");
            this.postList = response.data;
        },
    },
};
</script>
  
<style scoped>
.post-list {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 30px;
    padding: 15px;
    box-sizing: border-box;
}

.post {
    background-color: #f5f5f5;
    border-radius: 20px;
    padding: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.post:hover {
    transform: translateY(-5px);
}

.post h2 {
    font-size: 20px;
    margin: 0;
    margin-bottom: 10px;
    color: #1755ca;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.post p {
    font-size: 16px;
    margin: 0;
    text-align: justify;
    height: 150px;
}

@media only screen and (min-width: 320px) {
    .post-list {
        grid-template-columns: repeat(2, 1fr);
        padding: 15px 10px;
    }

    .post {
        padding: 8px;
    }

    .post h2 {
        font-size: 18px;
        margin-bottom: 5px;
    }

    .post p {
        font-size: 14px;
    }
}

@media only screen and (min-width: 525px) {
    .post-list {
        grid-template-columns: repeat(3, 1fr);
    }
}

@media only screen and (min-width: 768px) {
    .post h2 {
        font-size: 24px;
    }

    .post p {
        font-size: 18px;
    }
}
</style>
  