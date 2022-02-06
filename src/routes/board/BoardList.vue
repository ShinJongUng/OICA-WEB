<template>
  <div class="container-md">
    <RouterLink
      :to="'/board/BoardAdd'"
      class="btn btn-secondary">
      글 작성
    </RouterLink>
    <div class="row">
      <div class="col-md-12">
        <table class="table">
          <thead>
            <tr>
              <th>작성자</th>
              <th>제목</th>
              <th>내용</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="board in Boards"
              :key="board.key">
              <td>{{ board.author }}</td>
              <td>{{ board.title }}</td>
              <td>{{ board.contents }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
    import { db } from '../../firebaseConfig';
    import { collection, onSnapshot  } from "firebase/firestore";
    export default {
        data() {
            return {
                Boards: []
            }
        },
        created() {
            onSnapshot(collection(db, "boards"), (querySnapshot) => {
              this.Boards = [];
              querySnapshot.forEach((doc) => {
                this.Boards.push({
                  key: doc.id,
                  author: doc.data().author,
                  title: doc.data().title,
                  contents: doc.data().contents
                })
              })
            })
        },
        methods: {
            // deleteUser(id){
            //   if (window.confirm("Do you really want to delete?")) {
            //     db.collection("boards").doc(id).delete().then(() => {
            //         console.log("Document deleted!");
            //     })
            //     .catch((error) => {
            //         console.error(error);
            //     })
            //   }
            // }
        }
    }
</script>
<style>
    .btn-secondary {
        margin-top: 40px;
        margin-bottom: 20px;
    }
</style>