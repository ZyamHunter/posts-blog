<template>
  <div>
    <Header></Header>
    <div class="post-list">
      <div v-for="(post, index) in postList" :key="index" class="post" @click="getPostComments(post.id, post.title)">
        <h2>{{ post.title }}</h2>
        <p>{{ post.body }}</p>
      </div>
    </div>

    <b-modal v-model="modalShow" size="xl" title="Comentários do post">
      <template #modal-header>
        <h2 class="comment-post-title"> {{ postTitle }} </h2>
      </template>

      <div class="post-list-comment">
        <div v-for="(comment, index) in postListComments" :key="index" class="comment">
          <div class="comment-post-header">
            <div class="comment-post-name"> {{ comment.name }} </div>
            <div> {{ comment.email }}</div>
          </div>
          <div class="comment-post-body"> {{ comment.body }} </div>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
import api from "../services/index"
import Header from "../components/Header.vue"

export default {
  name: "Home",

  components: {
    Header
  },

  data() {
    return {
      postList: [],
      modalShow: false,
      postListComments: [],
      postTitle: null,
    };
  },

  async mounted() {
    await this.getPostList()
  },

  methods: {
    async getPostList() {
      const response = await api.get("/posts");
      this.postList = response.data;
      this.addPosts()
    },
    async getPostComments(id, title) {
      const response = await api.get(`/posts/${id}/comments`);
      this.postListComments = response.data;
      this.postTitle = title;
      this.modalShow = !this.modalShow;
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
  color: #1755ca;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 10px;
}

.post p {
  font-size: 16px;
  text-align: justify;
  margin: 10px 10px;
}

.post-list-comment {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 30px;
  padding: 15px;
  box-sizing: border-box;
}

.comment {
  background-color: #f5f5f5;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.comment-post-header {
  display: flex;
  justify-content: flex-start;
  padding: 5px 0px;
  font-weight: 600;
}

.comment-post-name {
  padding: 0px 15px 0px 0px;
  color: #1755ca;
}

.comment-post-body {
  text-align: justify;
}

.comment-post-title {
  padding-left: 20px;
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
