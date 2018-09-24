<template>
  <div class="md-layout" style="margin-top: -5%;">

<!-- LISTA DE VENTAS REALIZADAS -->
<div class="md-layout-item md-medium-size-30 md-xsmall-size-100 md-size-100 ">

  <md-list class="md-triple-line" style="border-radius:15px;">


     
      <div v-for="venta in users" :key="venta.id">
        <router-link :to="{path:'/sale/details/'+venta.id, params:{venta:venta}}">
      <md-list-item style="padding: 0px 0px;">
        <md-avatar>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2ZYxbsw4kHRFbhU9KQtnLu7TtmYITTNH58sVGKDKsq78MWo9Z" alt="People">
        </md-avatar>

        <div class="md-list-item-text">
          <span>{{venta.asunto}}</span>
          <span>{{venta.receptor.nombre}} {{venta.receptor.apellido}}</span>
          <p><b>$ {{venta.monto_total}} CLP</b></p>
        </div>

        
          <small>21 Sept</small>
       
      </md-list-item>
        <md-divider class="md-inset"></md-divider>
        </router-link>
  </div>
    
       
       

      
    </md-list>


  
</div>

    
  </div>
</template>

<script>
// LIBRERIAS EXTERNAS
import users from "@/pages/Dashboard/Tables/users.js";
import Fuse from "fuse.js";
import swal from "sweetalert2";


//COMPONENTES
import {
  StatsCard,
  NavTabsCard,
  TimeLine,
  TimeLineItem,
  PricingCard,
  TestimonialCard,
  Pagination,
  
  
} from "@/components";

export default {
  components: {
    StatsCard,
    NavTabsCard,
    PricingCard,
    TimeLine,
    TimeLineItem,
    TestimonialCard,
    Pagination,
    
  },
  props: {},
  data() {
    return {
      users: users,
      checkbox1: null,
      currentSort: "Comprador",
      currentSortOrder: "asc",
      pagination: {
        perPage: 5,
        currentPage: 1,
        perPageOptions: [5, 10, 25, 50],
        total: 0,
         bottomPosition: 'md-bottom-left'
      },
      // footerTable: ["Name", "Email", "Age", "Salary", "Actions"],
      searchQuery: "",
      propsToSearch: ["Comprador", "Asunto", "total", "fecha"],
      tableData: users,
      searchedData: [],
      fuseSearch: null
    };
  },
  methods: {
    customSort(value) {
      return value.sort((a, b) => {
        const sortBy = this.currentSort;
        if (this.currentSortOrder === "desc") {
          return a[sortBy].localeCompare(b[sortBy]);
        }
        return b[sortBy].localeCompare(a[sortBy]);
      });
    },
    handleLike(item) {
      swal({
        title: `You liked ${item.name}`,
        buttonsStyling: false,
        type: "success",
        confirmButtonClass: "md-button md-success"
      });
    },
    handleEdit(item) {
      swal({
        title: `You want to edit ${item.name}`,
        buttonsStyling: false,
        confirmButtonClass: "md-button md-info"
      });
    },
    handleDelete(item) {
      swal({
        title: "Are you sure?",
        text: `You won't be able to revert this!`,
        type: "warning",
        showCancelButton: true,
        confirmButtonClass: "md-button md-success btn-fill",
        cancelButtonClass: "md-button md-danger btn-fill",
        confirmButtonText: "Yes, delete it!",
        buttonsStyling: false
      }).then(result => {
        if (result.value) {
          this.deleteRow(item);
          swal({
            title: "Deleted!",
            text: `You deleted ${item.name}`,
            type: "success",
            confirmButtonClass: "md-button md-success btn-fill",
            buttonsStyling: false
          });
        }
      });
    },
    deleteRow(item) {
      let indexToDelete = this.tableData.findIndex(
        tableRow => tableRow.id === item.id
      );
      if (indexToDelete >= 0) {
        this.tableData.splice(indexToDelete, 1);
      }
    }
  },
  mounted() {
    this.onResponsiveInverted();
    window.addEventListener("resize", this.onResponsiveInverted);
    // Fuse search initialization.
    this.fuseSearch = new Fuse(this.tableData, {
      keys: ["name", "email"],
      threshold: 0.3
    });
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResponsiveInverted);
  },
  computed: {
    /***
     * Returns a page from the searched data or the whole data. Search is performed in the watch section below
     */
    queriedData() {
      let result = this.tableData;
      if (this.searchedData.length > 0) {
        result = this.searchedData;
      }
      return result.slice(this.from, this.to);
    },
    to() {
      let highBound = this.from + this.pagination.perPage;
      if (this.total < highBound) {
        highBound = this.total;
      }
      return highBound;
    },
    from() {
      return this.pagination.perPage * (this.pagination.currentPage - 1);
    },
    total() {
      return this.searchedData.length > 0
        ? this.searchedData.length
        : this.tableData.length;
    }
  },
  watch: {
    /**
     * Searches through the table data by a given query.
     * NOTE: If you have a lot of data, it's recommended to do the search on the Server Side and only display the results here.
     * @param value of the query
     */
    searchQuery(value) {
      let result = this.tableData;
      if (value !== "") {
        result = this.fuseSearch.search(this.searchQuery);
      }
      this.searchedData = result;
    }
  }
};
</script>
<style lang="scss" scoped>
  small {
    display: block;
  }
</style>
