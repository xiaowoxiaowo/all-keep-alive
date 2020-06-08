<template>
  <div id="home">
    <header></header>
    <div class="content">
      <div class="leftBox">
        <div @click="addTagPage('page1','page1','测试页面1',{id:123})">测试页面1</div>
        <div @click="pushPage('page2')">测试页面2</div>
        <div @click="addTagPage('page3','page3','测试页面3-1','1')">测试页面3，参数1</div>
        <div @click="addTagPage('page3','page3','测试页面3-2','2')">测试页面3，参数2</div>
        <div @click="addTagPage('page3','page3','测试页面3-3','3')">测试页面3，参数3</div>
        <!--<div @click="addTagPage('page3','page3','测试页面3')">测试页面3</div>-->
      </div>
      <div class="rightBox">
        <div class="tagBox">
          <!--<span class="tag"
                v-for="(item,key) in $store.state.tagList"
                :class="{active:key == $store.state.tagSelected}"
                @click="clickTag(key)"
                :key="key">
            {{item.text}}
            <span @click.stop="closeTag(key)">X</span>
          </span>-->
          <el-tabs v-model="$store.state.tagSelected" type="card" closable @tab-remove="closeTag" @tab-click="clickTag">
            <el-tab-pane
              v-for="(item, index) in tagList"
              :key="index"
              :label="item.text"
              :name="index + ''"
            >
            </el-tab-pane>
          </el-tabs>
        </div>
        <div id="routerBox">
          <keep-alive :include="includePageNames">
            <router-view/>
          </keep-alive>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./home.js"></script>
<style lang="scss" scoped>
  @import "./home.scss";
</style>
