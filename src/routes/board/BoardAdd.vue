<template>
  <div class="container-md">
    <div class="main-title">
      글 작성
    </div>
    <hr />
    <div class="row justify-content-center">
      <div class="col-md-5">
        <form @submit.prevent="onFormSubmit">
          <div class="form-group">
            <label class="form-label">작성자</label>
            <input
              type="text"
              class="form-control"
              v-if="user !==null"
              v-model="user.displayName"
              required 
              disabled />
          </div>
          <div class="form-group">
            <label class="form-label">제목</label>
            <input
              type="text"
              class="form-control"
              v-model="board.title"
              required />
          </div>
          <div class="form-group">
            <label class="form-label">내용</label>
            <textarea
              class="form-control"
              v-model="board.contents"
              rows="5"></textarea>
          </div>
          <div class="form-group">
            <button class="btn btn-primary btn-block">
              글 작성 
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
    import { db } from '../../firebaseConfig';
    import { collection, addDoc } from "firebase/firestore";
  import { getAuth, onAuthStateChanged  } from "firebase/auth";

    export default {
      created() {
        onAuthStateChanged(getAuth(), (user) => {
        if (user) {
        this.user = user
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
    // ...
      } else {
      this.user = null;
      alert('글 작성은 로그인 후 이용 가능합니다.');
      this.$router.push('/board/BoardList');
      
      
    // User is signed out
    // ...
        }
      });
    },
        data() {
            return {
                board: {
                },
                user: null
            }
        },
        methods: {
            async onFormSubmit(event) {
                event.preventDefault()
                  try {
                    const docRef = await addDoc(collection(db, "boards"), {
                    author: this.user.displayName,
                    title: this.board.title,
                    contents: this.board.contents
                  });
                alert('정상 작성 되었습니다.');
                this.$router.push('/board/BoardList');
              } catch (e) {
                alert("Error adding document: ", e);
              }
            }
        }
    }
</script>

<style scoped lang="scss">

  .btn{
    margin-top: 10px;
  }
  .container-md{
    font-family: 'Nanum Gothic', sans-serif;
    .main-title{
    font-size: 40px;
    font-weight: 600;
    text-align: center;
    margin-top: 50px;
    margin-bottom: 20px;
    }
    hr{
      margin-bottom: 60px;
    }
}
</style>