<template>
  <div class="my-4">
    <div class="bg-dark d-flex justify-content-between align-item-center">
      <h2 class="mb-0">ALL COLOR LIST</h2>
      <router-link
        class="text-light btn btn-icon btn-primary"
        :to="{path:'/admin/color'}"
      >
        <span class="btn-inner--icon"><i class="ni ni-fat-add"></i></span>
        <span class="btn-inner--text">CREATE NEW COLOR</span>
      </router-link>
    </div>
    <!-- card header -->
    <div class="card">
    <section class="container my-2 card-body">
        <form action="" method="POST" enctype="multipart/form-data">

            <div class="row">
                <div class="col-md-4 col-sm-12 col-lg-4 col-12">
                    <div class="form-gorup">
                        <label for="">Category Name <span class="text-danger">*</span></label>
                        <input type="text" class="form-control" name="name" value="" placeholder="Type Here Category Name" id="">
                    </div>
                </div>

                <div class="col-md-4 col-sm-12 col-lg-4 col-12">
                    <div class="form-gorup">

                        <label for="">Icon Image (30 x 30)<span class="text-danger">*</span></label>
                        <input type="file" class="form-control" name="icon_image" id="">
                    </div>
                </div>

                <div class="col-md-4 col-sm-12 col-lg-4 col-12">
                    <div class="form-gorup">
                       <label for="">Banner Image (832 x 300)<span class="text-danger">*</span></label>
                    <input type="file" class="form-control" name="banner_image" id="">
                    </div>
                </div>
            </div><!-- name icon & banner image -->
            <div class="form-gorup">
                <label for="">Select Parent Category</label>
                <select name="parent_category" class="form-control p-1" id="">
                    <option value="">--Select Parent Category --</option>
                    <option value="Dress">Dress</option>
                    <option value="Dress">shows</option>
                    <option value="Dress">watch</option>
                </select>
            </div>

            <div class="form-group">
                <label for="">Category Description</label>
                <textarea placeholder="Description" class="form-control" name="description" id="" cols="15" rows="5" ></textarea>
            </div>
            <div class="float-right">
                <input type="submit" class="btn btn-primary text-light" name="" value="Create New Category" id="">
            </div>

        </form>
    </section>
</div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
