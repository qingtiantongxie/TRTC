<template>
  <div class="wraper">
    <el-row :gutter="20">
      <el-col v-for="(o) in list"
      :key="o.name"
      :span="3">
        <el-card :body-style="{ padding: '0px' }">
        <img
          :src="o.src"
          class="image"
          alt=""
        />
        <div style="padding: 10px">
          <div>
            <div>等待人: {{o.name}}</div>
            <div>房间号: {{o.id}}</div>
          </div>

          <div class="bottom flex">
            <span>当前热恋度: {{o.hot}}</span>
            <el-link class="button" @click="handlejoin(o)">进入</el-link>
          </div>
        </div>
      </el-card>
      </el-col>
    </el-row>
  </div>

</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';
import { getParamKey } from '@/utils/utils';
import appStore from '@/store/index';

interface List {
    src: string;
    hot: string;
    name: string;
    id: number;
}
const img = [
  'https://img1.baidu.com/it/u=1484763111,3563268984&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
  'https://img0.baidu.com/it/u=3610348626,247149223&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
  'https://img2.baidu.com/it/u=3609994725,1903196332&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
  'https://img1.baidu.com/it/u=1731828018,94518109&fm=253&fmt=auto&app=120&f=JPEG?w=514&h=500',
  'https://img1.baidu.com/it/u=4049475639,1785112968&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
  'https://img0.baidu.com/it/u=734293696,521979772&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=800"',
  'https://img1.baidu.com/it/u=1047804298,1829044303&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
  'https://img1.baidu.com/it/u=4076647965,883992420&fm=253&fmt=auto&app=138&f=JPEG?w=508&h=500',
  'https://img1.baidu.com/it/u=3988891705,1352860929&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=479',
  'https://img1.baidu.com/it/u=1920493694,3218649106&fm=253&fmt=auto&app=138&f=JPEG?w=508&h=500',
  'https://img1.baidu.com/it/u=3089010813,1714141668&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=492',
  'https://img0.baidu.com/it/u=369003852,2582468028&fm=253&fmt=auto&app=138&f=JPEG?w=511&h=500',
  'https://img1.baidu.com/it/u=1569439584,3562512193&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=800',
];
const list: List[] = ['任然', '黄玺中', '祁红玉', '钟鸣鸣', '苏美人', '李妍熙', '邢秀丽', '乐一茗', '翟乐一', '杜政也', '候胥颜', '赵晗伊', '何小鱼'].map((item, index) => ({
  src: img[index],
  hot: (Math.random() * 100).toFixed(0) + 50,
  name: item,
  id: 111,
}));

const router = useRouter();
const store = appStore();

const handlejoin = (o: List) => {
  store.$patch({
    sdkAppId: getParamKey('sdkAppId'),
    secretKey: getParamKey('secretKey'),
    userId: getParamKey('userId'),
    roomId: `${o.id}`,
  });
  const { id } = o;
  router.push(`/room/${id}`);
};

</script>
<style>
.wraper{
  width: 100%;
  height: calc(100vh - 50px);
  display: flex;
}
.box-card{
  height: 75%;
  width: 75%;
  margin: auto;
}
.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.image {
  width: 100%;
  display: block;
}
.bottom {
  margin-top: 13px;
  line-height: 12px;
}
</style>
