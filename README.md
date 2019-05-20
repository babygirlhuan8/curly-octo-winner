# curly-octo-winner
学习记录webpack + Vue

# 关于Vue的配置
1.vue-template-compiler 和 Vue的版本必须一致，否则build时报错
2.如果在webpack配置文件中未配置resolve信息，在index.js文件中引用Vue，必须要用import Vue from '../node_modules/vue/dist/vue.js，否则会报Vue is not a constructor
3.在配置了resolve信息后，可直接import Vue from 'vue'，在构建时，会根据配置从node_modules中读取文件
4.Vue-loader版本为15时，会提示 ``` vue-loader was used without the corresponding plugin```,更新vue-loader版本为vue-loader@^14.2.2后解决 参考：https://github.com/rails/webpacker/issues/1453


添加css前缀
自动生成HTML模板
编译es6语法
语法检查