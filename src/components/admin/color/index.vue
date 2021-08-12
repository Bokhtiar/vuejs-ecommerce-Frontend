<template>
  <div class="my-4">
    <div class="bg-dark d-flex justify-content-between align-item-center">
      <h2 class="mb-0">ALL COLOR LIST</h2>
      <router-link
        class="text-light btn btn-icon btn-primary"
        :to="{path:'/admin/color/create'}"
      >
        <span class="btn-inner--icon"><i class="ni ni-fat-add"></i></span>
        <span class="btn-inner--text">CREATE NEW COLOR</span>
      </router-link>
    </div>
    <!-- card header -->
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Index</th>
          <th scope="col">Color Code</th>
          <th scope="col">Color Name</th>
          <th scope="col">Color</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td colspan="2">Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
