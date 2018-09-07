import Vue from 'vue';
import VRipple from '../src';

Vue.directive('ripple', VRipple);

new Vue({
  el: "#app",
  data() {
    return {
      show: false
    };
  },
  template: `
    <el-row>
        <el-col :span="4">
            <el-menu
            default-active="1"
            :default-openeds="['1']"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>导航一</span>
                </template>
                <el-menu-item-group>
                    <template slot="title">分组一</template>
                    <el-menu-item index="1-1" v-ripple.mouseenter="{during: 0.8}">选项1</el-menu-item>
                    <el-menu-item index="1-2" v-ripple.mouseenter="{during: 0.8}">选项2</el-menu-item>
                </el-menu-item-group>
                    <el-menu-item-group title="分组2">
                    <el-menu-item index="1-3" v-ripple.mouseenter="{during: 0.8}">选项3</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-col>
        <el-col :span="20">
            <el-row>
                <el-button v-ripple>默认按钮</el-button>
                <el-button v-ripple.mouseenter type="primary">主要按钮</el-button>
                <el-button v-ripple.mouseenter type="success">成功按钮</el-button>
                <el-button v-ripple.mouseenter type="info">信息按钮</el-button>
                <el-button v-ripple.mouseenter type="warning">警告按钮</el-button>
                <el-button v-ripple.mouseenter type="danger">危险按钮</el-button>
            </el-row>
            
            <el-row>
                <el-button v-ripple plain>朴素按钮</el-button>
                <el-button v-ripple type="primary" plain>主要按钮</el-button>
                <el-button v-ripple type="success" plain>成功按钮</el-button>
                <el-button v-ripple type="info" plain>信息按钮</el-button>
                <el-button v-ripple type="warning" plain>警告按钮</el-button>
                <el-button v-ripple type="danger" plain>危险按钮</el-button>
            </el-row>
            
            <el-row>
                <el-button v-ripple round>圆角按钮</el-button>
                <el-button v-ripple type="primary" round>主要按钮</el-button>
                <el-button v-ripple type="success" round>成功按钮</el-button>
                <el-button v-ripple type="info" round>信息按钮</el-button>
                <el-button v-ripple type="warning" round>警告按钮</el-button>
                <el-button v-ripple type="danger" round>危险按钮</el-button>
            </el-row>
            
            <el-row>
                <el-button v-ripple icon="el-icon-search" circle></el-button>
                <el-button v-ripple type="primary" icon="el-icon-edit" circle></el-button>
                <el-button v-ripple type="success" icon="el-icon-check" circle></el-button>
                <el-button v-ripple type="info" icon="el-icon-message" circle></el-button>
                <el-button v-ripple type="warning" icon="el-icon-star-off" circle></el-button>
                <el-button v-ripple type="danger" icon="el-icon-delete" circle></el-button>
            </el-row>
            <el-row>
                <el-card class="box-card" v-ripple="{color: '#409eff22'}">
                    <div slot="header" class="clearfix">
                    <span>卡片名称</span>
                    <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
                    </div>
                    <div v-for="o in 4" :key="o" class="text item">
                    {{'列表内容 ' + o }}
                    </div>
                </el-card>
            </el-row>
            
        </el-col>
    </el-row>
    `
});