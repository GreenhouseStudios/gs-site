<template>
   <div class="flex flex-column gap-1 absolute left-2 ph4 ml5">
          <h5>Share:</h5>
          <div class="facebook social-icon">
            <a :href="`https://www.facebook.com/sharer/sharer.php?u=https%3A//greenhousestudios.uconn.edu/blog/${$route.path}`"
              ><img
                loading="lazy"
                class="shadow"
                src="../../public/img/facebook.svg"
                alt="facebook"
            /></a>
          </div>
          <div class="twitter social-icon">
            <a :href="`https://twitter.com/intent/tweet?text=https%3A//greenhousestudios.uconn.edu/blog/${$route.path}`"
              ><img
                loading="lazy"
                class="shadow"
                src="../../public/img/twitter.svg"
                alt="twitter"
            /></a>
          </div>
          <div class="email social-icon">
            <a href="mailto:greenhousestudios@uconn.edu"
              ><img
                loading="lazy"
                class="shadow"
                src="../../public/img/email.svg"
                alt="email"
            /></a>
          </div>
        </div>
</template>

<script>
    export default {
        name: "ShareLinks"
    }
</script>

<style lang="scss" scoped>
.social-icon{
    width: 50px;
}
.social-icon:hover{
  color:white !important;
}
</style>