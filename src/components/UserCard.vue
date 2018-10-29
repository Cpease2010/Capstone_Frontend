<template>
  <div>
    <b-card :title="user.user_name" img-src="https://lh6.googleusercontent.com/-dkwL1k6ogXM/AAAAAAAAAAI/AAAAAAAAYpM/pDNMKchLpIc/photo.jpg"
      img-alt="Image" img-top tag="article" style="max-width: 20rem;" class="mb-2">
    </b-card>
  </div>
</template>

<script>
  export default{
    name: 'UserCard',
    props: ['user']
  }
</script>
