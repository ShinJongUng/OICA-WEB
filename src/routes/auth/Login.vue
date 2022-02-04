<template>
  <div class="container-md">
    <h1>로그인</h1>

    <form>
      <div class="mb-3">
        <label
          class="form-label">이메일 주소</label>
        <input
          type="email"
          name="email"
          class="form-control"
          v-model="email" />
      </div>
      <div class="mb-3">
        <label
          class="form-label">비밀번호</label>
        <input
          type="password"
          class="form-control"
          v-model="password" />
      </div>
      <button
        @click="signIn"
        type="submit"
        class="btn btn-primary">
        로그인
      </button>
    </form>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router' 
  import { getAuth, signInWithEmailAndPassword } from "firebase/auth" 

  const email = ref('')
  const password = ref('')
  const auth = getAuth()
  const router = useRouter()
  const errMsg = ref()
  const signIn = () => {
    signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    router.push('/')
    // ...
    })
    .catch((error) => {
      switch (error.code) {
          case 'auth/invalid-email':
              errMsg.value = '이메일을 잘못 입력 하셨습니다.'
              break
          case 'auth/user-not-found':
              errMsg.value = '존재하지 않는 이메일 주소입니다.'
              break
          case 'auth/wrong-password':
              errMsg.value = '비밀번호를 잘못 입력 하셨습니다.'
              break
          case 'auth/too-many-requests':
              errMsg.value = '접속 시도를 너무 많이 하셨습니다.'
              break
          default:
              errMsg.value = '이메일 혹은 비밀번호가 틀렸습니다.'
              break
        }
    alert(errMsg.value);
    console.log(error.code)
    });
  }
  

</script>



<style scoped lang="scss">
  .container-md{
    h1{
      margin-bottom: 50px;
      font-weight: 600;
    }
    input{
      width:50%;
    }
    font-family: 'Nanum Gothic', sans-serif;
    padding-top: 80px;
    padding-bottom: 80px;
  }

  @media(max-width: 1500px){
    .container-md{
    input{
      width:100%;
    }
  }
  }
</style>