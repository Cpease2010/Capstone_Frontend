<template>
  <div>
    <b-card :title="user.user_name" :img-src="picture"
      img-alt="Image" img-top tag="article" style="max-width: 20rem;" class="mx-auto">
    </b-card>
  </div>
</template>

<script>
  export default{
    name: 'UserCard',
    props: ['user'],
    data (){
      return {
        picture: ''
      }
    },
    mounted() {
      this.picture = localStorage.getItem('picture') 
    }
  }
</script>
