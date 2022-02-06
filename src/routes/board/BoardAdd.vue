<template>
  <div class="container-md">
    <div class="row justify-content-center">
      <div class="col-md-5">
        <h3 class="text-center">
          글 쓰기
        </h3>
        <form @submit.prevent="onFormSubmit">
          <div class="form-group">
            <label>작성자</label>
            <input
              type="text"
              class="form-control"
              v-model="board.author"
              required />
          </div>
          <div class="form-group">
            <label>제목</label>
            <input
              type="text"
              class="form-control"
              v-model="board.title"
              required />
          </div>
          <div class="form-group">
            <label>내용</label>
            <input
              type="text"
              class="form-control"
              v-model="board.contents"
              required />
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
    export default {
        data() {
            return {
                board: {
                }
            }
        },
        methods: {
            async onFormSubmit(event) {
                event.preventDefault()
                  try {
                    const docRef = await addDoc(collection(db, "boards"), {
                    author: this.board.author,
                    title: this.board.title,
                    contents: this.board.contents
                  });
                alert('정상 작성 되었습니다.');
                this.$router.push('/board/BoardList');
              } catch (e) {
                alert.error("Error adding document: ", e);
              }
            }
        }
    }
</script>