<template>
   <div class="flex flex-column-ns absolute-ns left-2 ph4-ns ml5-ns items-center pv2" style="gap: 1rem">
          <h5 class="mv0">Share:</h5>
          <div class="facebook social-icon">
            <a :href="`https://www.facebook.com/sharer/sharer.php?u=https%3A//greenhousestudios.uconn.edu/blog/${$route.path}`"
              ><i class="fa fa-facebook"></i></a>
          </div>
          <div class="twitter social-icon">
            <a :href="`https://twitter.com/intent/tweet?text=https%3A//greenhousestudios.uconn.edu/blog/${$route.path}`"
              ><i class="fa fa-twitter"></i></a>
          </div>
          <div class="email social-icon">
            <a href="mailto:greenhousestudios@uconn.edu"
              ><i class="fa fa-linkedin"></i></a>
          </div>
        </div>
</template>

<script>
    export default {
        name: "ShareLinks"
    }
</script>

<style lang="scss" scoped>

i {
  color: darkgray;
  font-size: 24px;

}

i:hover {
  color: black;
}

.alignleft{
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  gap: 10px;

}

@media (min-width: 1100px){
.alignleft{
  flex-direction: column;
position: absolute;
left: 200px;
}
}
</style>