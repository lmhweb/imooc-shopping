<template>
    <div>
      <header-component></header-component>
      <breadcrumb-component><span slot="bread">Goods</span></breadcrumb-component>
      <div class="accessory-result-page accessory-page">
        <div class="container">
          <div class="filter-nav">
            <span class="sortby">Sort by:</span>
            <a href="javascript:void(0)" class="default cur">Default</a>
            <a href="javascript:void(0)" class="price">Price <svg class="icon icon-arrow-short"><use xlink:href="#icon-arrow-short"></use></svg></a>
            <a href="javascript:void(0)" class="filterby stopPop" @click="showFilterPop">Filter by</a>
          </div>
          <div class="accessory-result">
            <!-- filter -->
            <div class="filter stopPop" :class='{"filterby-show":filterBy}' id="filter">
              <dl class="filter-price">
                <dt>Price:</dt>
                <dd><a href="javascript:void(0)"  @click='priceChecked="all"' :class='{"cur":priceChecked=="all"}'>All</a></dd>
                <dd v-for= "(price,index) in priceFilter" @click='setPriceFilter(index)'>
                  <a href="javascript:void(0)" :class='{"cur":priceChecked==index}'>{{price.startPrice}} - {{price.endPrice}}</a>
                </dd>
              </dl>
            </div>

            <!-- search result accessories list -->
            <div class="accessory-list-wrap">
              <div class="accessory-list col-4">
                <ul>
                  <li v-for="item in goodsList">
                    <div class="pic">
                      <a href="#"><img v-lazy="'static/'+item.productImg" alt=""></a>
                    </div>
                    <div class="main">
                      <div class="name">{{item.productName}}</div>
                      <div class="price">{{item.productPrice}}</div>
                      <div class="btn-area">
                        <a href="javascript:;" class="btn btn--m">加入购物车</a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div :class="{'md-overlay':overLayFlag}" @click="showFilterPop" style=""></div>
          </div>
        </div>
      </div>
      <footer-component></footer-component>
    </div>
</template>
<script>
  import axios  from "axios";
  import headerComponent from "@/components/Header";
  import footerComponent from "@/components/Footer";
  import breadcrumbComponent from "@/components/Breadcrumb";
  import "@/assets/css/base.css";
  import "@/assets/css/login.css";
  import "@/assets/css/product.css";
    export default {
        data(){
            return {
                goodsList:[],
                priceFilter:[
                  {
                      startPrice:"0.00",
                      endPrice:"500.00"
                  },
                  {
                    startPrice:"500.00",
                    endPrice:"1000.00"
                  },
                  {
                    startPrice:"1000.00",
                    endPrice:"1500.00"
                  },
                  {
                    startPrice:"2000.00",
                    endPrice:"2500.00"
                  }
                ],
                priceChecked:"all",
                filterBy:false,
                overLayFlag:false
            }
        },
        components:{
          "header-component":headerComponent,
          "footer-component":footerComponent,
          "breadcrumb-component":breadcrumbComponent
        },
      mounted:function () {
        this.getGoodsList();
      },
      methods:{
            getGoodsList(){
              axios.get("/api/goods").then((result)=>{
                  var res=result.data.data;
                  this.goodsList=res.result;
              })

            },
            showFilterPop(){
                this.filterBy=!this.filterBy;
                this.overLayFlag=!this.overLayFlag;
            },
            setPriceFilter(index){
              this.priceChecked=index;
              this.showFilterPop();
            }
      }
    }
</script>

