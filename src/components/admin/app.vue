<template>
  <div>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no"
        />
        <title>CORK Admin - Multipurpose Bootstrap Dashboard Template</title>
        <link rel="icon" type="image/x-icon" href="assets/img/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css?family=Nunito:400,600,700"
          rel="stylesheet"
        />
      </head>
      <body class="alt-menu sidebar-noneoverflow">
        <!-- BEGIN LOADER -->
        <!-- <div id="load_screen"> <div class="loader"> <div class="loader-content">
        <div class="spinner-grow align-self-center"></div>
    </div></div></div> -->
        <!--  END LOADER -->

        <!--  BEGIN NAVBAR  -->
        <navbar />
        <!--  END NAVBAR  -->

        <!--  BEGIN MAIN CONTAINER  -->
        <div class="main-container sidebar-closed sbar-open" id="container">
          <div class="overlay"></div>
          <div class="cs-overlay"></div>
          <div class="search-overlay"></div>

          <!--  BEGIN SIDEBAR  -->
          <div class="sidebar-wrapper sidebar-theme">
            <sidebar />
          </div>
          <!--  END SIDEBAR  -->

          <!--  BEGIN CONTENT AREA  -->
          <div id="content" class="main-content">
            <div class="layout-px-spacing">
              <router-view />
            </div>
          </div>
          <!--  END CONTENT AREA  -->
        </div>
        <!-- END MAIN CONTAINER -->
      </body>
    </html>
  </div>
</template>

<script>

import("@/assets/assets/css/loader.css");
import("@/assets/assets/js/loader.js");
import("@/assets/bootstrap/css/bootstrap.min.css");
import("@/assets/assets/css/plugins.css");
import("@/assets/plugins/apex/apexcharts.css");
import("@/assets/assets/css/dashboard/dash_1.css");

import("@/assets/assets/js/libs/jquery-3.1.1.min.js");
import("@/assets/bootstrap/js/popper.min.js");
import("@/assets/bootstrap/js/bootstrap.min.js");
import("@/assets/plugins/perfect-scrollbar/perfect-scrollbar.min.js");
import("@/assets/assets/js/app.js");
$(document).ready(function () {
  App.init();
});
import("@/assets/assets/js/custom.js");
import("@/assets/plugins/apex/apexcharts.min.js");
import("@/assets/assets/js/dashboard/dash_1.js");

import navbar from "./partial/header.vue";
import sidebar from "./partial/sidebar.vue";
export default {
  name: "App",
  components: {
    navbar,
    sidebar,
  },
};
</script>

<style>
</style>
