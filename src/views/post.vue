<template>
    <div>

        <div class="container my-5 pt-5">
            <div class="row mb-5">
                <div class="col-11 mx-auto mx-sm-0">
                    <h2>{{ post.title }}</h2>
                    <p>{{ post.date }}</p>
                </div>
            </div>
            <div class="row text-justify">
                <div class="col-11 mx-auto mx-sm-0">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi doloribus, earum, eum aliquam porro repellendus fugiat
                    neque nulla natus consectetur unde quisquam assumenda maxime ipsam accusamus id quo. Eveniet nemo in suscipit debitis
                    repellat aut, possimus quas deleniti architecto, at eum, quasi perferendis! Maiores laborum esse ipsam error sequi
                    aliquid neque. Repellat quas velit cupiditate fugiat, nobis quisquam animi, quibusdam repellendus laudantium consectetur,
                    consequatur commodi temporibus porro earum unde aut labore fugit!</p>
                </div>
                <div class="col-11 col-lg-7 text-justify my-auto mx-auto mx-sm-0">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae et voluptatem architecto deserunt molestiae,
                    perspiciatis enim optio, nesciunt odit eos eum? Eaque dignissimos tenetur inventore dicta. Vel eveniet atque inventore,
                    asperiores tenetur ducimus adipisci ipsa, iure reiciendis. Earum culpa, excepturi consequuntur magnam nostrum,
                    alias officiis distinctio placeat repellendus at, rem aperiam necessitatibus vero quisquam consectetur facere?
                    Corrupti exercitationem architecto quibusdam, cumque quae debitis, soluta beatae quo, itaque totam repellat eaque.</p>
                </div>
                <div class="col-11 col-lg-4 text-center mx-auto mx-sm-0">
                    <img src="../assets/graficon_cikk.png" alt="grafikon_cikk" class="img-fluid">
                </div>
             </div>
        </div>
    </div>

 <!--  TODO: ki kell javítani dinamikusra -->

</template>

<script>
import { TYPES } from "../store";
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({ loadPost: TYPES.getters.getPost }),
    post() {
      return this.loadPost(this.$route.params.postID);
    }
  }
};
</script>
